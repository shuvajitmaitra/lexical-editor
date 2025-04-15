import { JSX } from 'react';
import { LexicalEditor } from 'lexical';
export declare function ToolbarContext({ activeEditor, $updateToolbar, blockType, setBlockType, showModal, children, }: {
    activeEditor: LexicalEditor;
    $updateToolbar: () => void;
    blockType: string;
    setBlockType: (blockType: string) => void;
    showModal: (title: string, showModal: (onClose: () => void) => JSX.Element) => void;
    children: React.ReactNode;
}): JSX.Element;
export declare function useToolbarContext(): {
    activeEditor: LexicalEditor;
    $updateToolbar: () => void;
    blockType: string;
    setBlockType: (blockType: string) => void;
    showModal: (title: string, showModal: (onClose: () => void) => JSX.Element) => void;
};
