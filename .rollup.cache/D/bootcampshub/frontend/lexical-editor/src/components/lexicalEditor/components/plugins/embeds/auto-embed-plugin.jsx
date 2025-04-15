'use client';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useMemo, useState } from 'react';
import { AutoEmbedOption, LexicalAutoEmbedPlugin, URL_MATCHER, } from '@lexical/react/LexicalAutoEmbedPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { PopoverPortal } from '@radix-ui/react-popover';
import { FigmaIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { Button } from '../../../ui/button';
import { Command, CommandGroup, CommandItem, CommandList, } from '../../../ui/command';
import { DialogFooter } from '../../../ui/dialog';
import { Input } from '../../../ui/input';
import { Popover, PopoverContent, PopoverTrigger, } from '../../../ui/popover';
import { useEditorModal } from '../../editor-hooks/use-modal';
import { INSERT_FIGMA_COMMAND } from '../../plugins/embeds/figma-plugin';
import { INSERT_TWEET_COMMAND } from '../../plugins/embeds/twitter-plugin';
import { INSERT_YOUTUBE_COMMAND } from '../../plugins/embeds/youtube-plugin';
export const YoutubeEmbedConfig = {
    contentName: 'Youtube Video',
    exampleUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    // Icon for display.
    icon: <YoutubeIcon className="size-4"/>,
    insertNode: (editor, result) => {
        editor.dispatchCommand(INSERT_YOUTUBE_COMMAND, result.id);
    },
    keywords: ['youtube', 'video'],
    // Determine if a given URL is a match and return url data.
    parseUrl: async (url) => {
        const match = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url);
        const id = match ? ((match === null || match === void 0 ? void 0 : match[2].length) === 11 ? match[2] : null) : null;
        if (id != null) {
            return {
                id,
                url,
            };
        }
        return null;
    },
    type: 'youtube-video',
};
export const TwitterEmbedConfig = {
    // e.g. Tweet or Google Map.
    contentName: 'Tweet',
    exampleUrl: 'https://twitter.com/jack/status/20',
    // Icon for display.
    icon: <TwitterIcon className="size-4"/>,
    // Create the Lexical embed node from the url data.
    insertNode: (editor, result) => {
        editor.dispatchCommand(INSERT_TWEET_COMMAND, result.id);
    },
    // For extra searching.
    keywords: ['tweet', 'twitter'],
    // Determine if a given URL is a match and return url data.
    parseUrl: (text) => {
        const match = /^https:\/\/(twitter|x)\.com\/(#!\/)?(\w+)\/status(es)*\/(\d+)/.exec(text);
        if (match != null) {
            return {
                id: match[5],
                url: match[1],
            };
        }
        return null;
    },
    type: 'tweet',
};
export const FigmaEmbedConfig = {
    contentName: 'Figma Document',
    exampleUrl: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    icon: <FigmaIcon className="size-4"/>,
    insertNode: (editor, result) => {
        editor.dispatchCommand(INSERT_FIGMA_COMMAND, result.id);
    },
    keywords: ['figma', 'figma.com', 'mock-up'],
    // Determine if a given URL is a match and return url data.
    parseUrl: (text) => {
        const match = /https:\/\/([\w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.exec(text);
        if (match != null) {
            return {
                id: match[3],
                url: match[0],
            };
        }
        return null;
    },
    type: 'figma',
};
export const EmbedConfigs = [
    TwitterEmbedConfig,
    YoutubeEmbedConfig,
    FigmaEmbedConfig,
];
const debounce = (callback, delay) => {
    let timeoutId;
    return (text) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(text);
        }, delay);
    };
};
export function AutoEmbedDialog({ embedConfig, onClose, }) {
    const [text, setText] = useState('');
    const [editor] = useLexicalComposerContext();
    const [embedResult, setEmbedResult] = useState(null);
    const validateText = useMemo(() => debounce((inputText) => {
        const urlMatch = URL_MATCHER.exec(inputText);
        if (embedConfig != null && inputText != null && urlMatch != null) {
            Promise.resolve(embedConfig.parseUrl(inputText)).then((parseResult) => {
                setEmbedResult(parseResult);
            });
        }
        else if (embedResult != null) {
            setEmbedResult(null);
        }
    }, 200), [embedConfig, embedResult]);
    const onClick = () => {
        if (embedResult != null) {
            embedConfig.insertNode(editor, embedResult);
            onClose();
        }
    };
    return (<div className="">
      <div className="space-y-4">
        <Input type="text" placeholder={embedConfig.exampleUrl} value={text} data-test-id={`${embedConfig.type}-embed-modal-url`} onChange={(e) => {
            const { value } = e.target;
            setText(value);
            validateText(value);
        }}/>
        <DialogFooter>
          <Button disabled={!embedResult} onClick={onClick} data-test-id={`${embedConfig.type}-embed-modal-submit-btn`}>
            Embed
          </Button>
        </DialogFooter>
      </div>
    </div>);
}
export function AutoEmbedPlugin() {
    const [modal, showModal] = useEditorModal();
    const openEmbedModal = (embedConfig) => {
        showModal(`Embed ${embedConfig.contentName}`, (onClose) => (<AutoEmbedDialog embedConfig={embedConfig} onClose={onClose}/>));
    };
    const getMenuOptions = (activeEmbedConfig, embedFn, dismissFn) => {
        return [
            new AutoEmbedOption('Dismiss', {
                onSelect: dismissFn,
            }),
            new AutoEmbedOption(`Embed ${activeEmbedConfig.contentName}`, {
                onSelect: embedFn,
            }),
        ];
    };
    return (<>
      {modal}
      <LexicalAutoEmbedPlugin embedConfigs={EmbedConfigs} onOpenEmbedModalForConfig={openEmbedModal} getMenuOptions={getMenuOptions} menuRenderFn={(anchorElementRef, { selectedIndex, options, selectOptionAndCleanUp, setHighlightedIndex, }) => {
            return anchorElementRef.current ? (<Popover open={true}>
              <PopoverPortal container={anchorElementRef.current}>
                <div className="-translate-y-full transform">
                  <PopoverTrigger />
                  <PopoverContent className="w-[200px] p-0" align="start" side="right">
                    <Command>
                      <CommandList>
                        <CommandGroup>
                          {options.map((option, i) => (<CommandItem key={option.key} value={option.title} onSelect={() => {
                        selectOptionAndCleanUp(option);
                    }} className="flex items-center gap-2">
                              {option.title}
                            </CommandItem>))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </div>
              </PopoverPortal>
            </Popover>) : null;
        }}/>
    </>);
}
//# sourceMappingURL=auto-embed-plugin.jsx.map