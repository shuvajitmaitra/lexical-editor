import { JSX } from 'react';
import { LexicalCommand, LexicalEditor } from 'lexical';
import { InlineImagePayload } from '../nodes/inline-image-node';
export type InsertInlineImagePayload = Readonly<InlineImagePayload>;
export declare const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload>;
export declare function InsertInlineImageDialog({ activeEditor, onClose, onImageUpload, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
    onImageUpload?: (file: File) => Promise<{
        url: string;
    }>;
}): JSX.Element;
export declare function InlineImagePlugin({ onImageUpload, }: {
    onImageUpload?: (file: File) => Promise<{
        url: string;
    }>;
}): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
