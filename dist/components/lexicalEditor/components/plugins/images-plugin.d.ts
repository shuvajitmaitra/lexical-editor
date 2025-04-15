/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { JSX } from 'react';
import { LexicalCommand, LexicalEditor } from 'lexical';
import { ImagePayload } from '../nodes/image-node';
export type InsertImagePayload = Readonly<ImagePayload>;
export declare const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload>;
export declare const UPLOAD_IMAGE_COMMAND: LexicalCommand<File>;
export declare function InsertImageUriDialogBody({ onClick, }: {
    onClick: (payload: InsertImagePayload) => void;
}): JSX.Element;
export declare function InsertImageUploadedDialogBody({ onClick, onClose, onImageUpload, }: {
    onClick: (payload: InsertImagePayload) => void;
    onClose?: () => void;
    onImageUpload?: (file: File) => Promise<{
        url: string;
    }>;
}): JSX.Element;
export declare function InsertImageDialog({ activeEditor, onClose, onImageUpload, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
    onImageUpload?: (file: File) => Promise<any | {
        url: string;
    }>;
}): JSX.Element;
export declare function ImagesPlugin({ captionsEnabled, }: {
    captionsEnabled?: boolean;
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
