'use client';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { MenuOption, useBasicTypeaheadTriggerMatch, } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { $createTextNode, $getSelection, $isRangeSelection, } from 'lexical';
const LexicalTypeaheadMenuPlugin = dynamic(() => import('./default/lexical-typeahead-menu-plugin'), { ssr: false });
class EmojiOption extends MenuOption {
    constructor(title, emoji, options) {
        super(title);
        this.title = title;
        this.emoji = emoji;
        this.keywords = options.keywords || [];
    }
}
const MAX_EMOJI_SUGGESTION_COUNT = 10;
export function EmojiPickerPlugin() {
    const [editor] = useLexicalComposerContext();
    const [queryString, setQueryString] = useState(null);
    const [emojis, setEmojis] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        import('../utils/emoji-list').then((file) => setEmojis(file.default));
    }, []);
    const emojiOptions = useMemo(() => emojis != null
        ? emojis.map(({ emoji, aliases, tags }) => new EmojiOption(aliases[0], emoji, {
            keywords: [...aliases, ...tags],
        }))
        : [], [emojis]);
    const checkForTriggerMatch = useBasicTypeaheadTriggerMatch(':', {
        minLength: 0,
    });
    const options = useMemo(() => {
        return emojiOptions
            .filter((option) => {
            return queryString != null
                ? new RegExp(queryString, 'gi').exec(option.title) ||
                    option.keywords != null
                    ? option.keywords.some((keyword) => new RegExp(queryString, 'gi').exec(keyword))
                    : false
                : emojiOptions;
        })
            .slice(0, MAX_EMOJI_SUGGESTION_COUNT);
    }, [emojiOptions, queryString]);
    const onSelectOption = useCallback((selectedOption, nodeToRemove, closeMenu) => {
        editor.update(() => {
            const selection = $getSelection();
            if (!$isRangeSelection(selection) || selectedOption == null) {
                return;
            }
            if (nodeToRemove) {
                nodeToRemove.remove();
            }
            selection.insertNodes([$createTextNode(selectedOption.emoji)]);
            closeMenu();
        });
    }, [editor]);
    return (
    // @ts-ignore
    <LexicalTypeaheadMenuPlugin onQueryChange={setQueryString} onSelectOption={onSelectOption} triggerFn={checkForTriggerMatch} options={options} onOpen={() => {
            setIsOpen(true);
        }} onClose={() => {
            setIsOpen(false);
        }} menuRenderFn={(anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => {
            return anchorElementRef.current && options.length
                ? createPortal(<div className="fixed w-[200px] rounded-md shadow-md">
                <Command onKeyDown={(e) => {
                        if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            setHighlightedIndex(selectedIndex !== null
                                ? (selectedIndex - 1 + options.length) %
                                    options.length
                                : options.length - 1);
                        }
                        else if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            setHighlightedIndex(selectedIndex !== null
                                ? (selectedIndex + 1) % options.length
                                : 0);
                        }
                    }}>
                  <CommandList>
                    <CommandGroup>
                      {options.map((option, index) => (<CommandItem key={option.key} value={option.title} onSelect={() => {
                            selectOptionAndCleanUp(option);
                        }} className={`flex items-center gap-2 ${selectedIndex === index
                            ? 'bg-accent'
                            : '!bg-transparent'}`}>
                          {option.emoji} {option.title}
                        </CommandItem>))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>, anchorElementRef.current)
                : null;
        }}/>);
}
//# sourceMappingURL=emoji-picker-plugin.jsx.map