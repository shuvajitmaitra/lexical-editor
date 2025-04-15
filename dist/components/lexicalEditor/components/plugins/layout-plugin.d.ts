import { JSX } from 'react';
import { LexicalEditor } from 'lexical';
import type { LexicalCommand, NodeKey } from 'lexical';
export declare function InsertLayoutDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): JSX.Element;
export declare const INSERT_LAYOUT_COMMAND: LexicalCommand<string>;
export declare const UPDATE_LAYOUT_COMMAND: LexicalCommand<{
    template: string;
    nodeKey: NodeKey;
}>;
export declare function LayoutPlugin(): null;
