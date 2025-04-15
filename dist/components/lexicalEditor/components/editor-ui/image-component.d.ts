import { JSX } from 'react';
import type { LexicalCommand, LexicalEditor, NodeKey } from 'lexical';
export declare const RIGHT_CLICK_IMAGE_COMMAND: LexicalCommand<MouseEvent>;
export default function ImageComponent({ src, altText, nodeKey, width, height, maxWidth, resizable, showCaption, caption, captionsEnabled, }: {
    altText: string;
    caption: LexicalEditor;
    height: 'inherit' | number;
    maxWidth: number;
    nodeKey: NodeKey;
    resizable: boolean;
    showCaption: boolean;
    src: string;
    width: 'inherit' | number;
    captionsEnabled: boolean;
}): JSX.Element;
