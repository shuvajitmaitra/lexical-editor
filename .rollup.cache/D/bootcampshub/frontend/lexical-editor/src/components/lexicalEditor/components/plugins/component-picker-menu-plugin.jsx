'use client';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useCallback, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useBasicTypeaheadTriggerMatch } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { useEditorModal } from '../editor-hooks/use-modal';
const LexicalTypeaheadMenuPlugin = dynamic(() => import('./default/lexical-typeahead-menu-plugin'), { ssr: false });
export function ComponentPickerMenuPlugin({ baseOptions = [], dynamicOptionsFn, }) {
    const [editor] = useLexicalComposerContext();
    const [modal, showModal] = useEditorModal();
    const [queryString, setQueryString] = useState(null);
    const checkForTriggerMatch = useBasicTypeaheadTriggerMatch('/', {
        minLength: 0,
    });
    const options = useMemo(() => {
        if (!queryString) {
            return baseOptions;
        }
        const regex = new RegExp(queryString, 'i');
        return [
            ...(dynamicOptionsFn === null || dynamicOptionsFn === void 0 ? void 0 : dynamicOptionsFn({ queryString })) || [],
            ...baseOptions.filter((option) => regex.test(option.title) ||
                option.keywords.some((keyword) => regex.test(keyword))),
        ];
    }, [editor, queryString, showModal]);
    const onSelectOption = useCallback((selectedOption, nodeToRemove, closeMenu, matchingString) => {
        editor.update(() => {
            nodeToRemove === null || nodeToRemove === void 0 ? void 0 : nodeToRemove.remove();
            selectedOption.onSelect(matchingString, editor, showModal);
            closeMenu();
        });
    }, [editor]);
    return (<>
      {modal}
      {/* @ts-ignore */}
      <LexicalTypeaheadMenuPlugin onQueryChange={setQueryString} onSelectOption={onSelectOption} triggerFn={checkForTriggerMatch} options={options} menuRenderFn={(anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => {
            return anchorElementRef.current && options.length
                ? createPortal(<div className="fixed w-[250px] rounded-md shadow-md">
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
                          {option.icon}
                          {option.title}
                        </CommandItem>))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>, anchorElementRef.current)
                : null;
        }}/>
    </>);
}
//# sourceMappingURL=component-picker-menu-plugin.jsx.map