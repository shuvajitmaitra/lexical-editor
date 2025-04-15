import { JSX } from 'react';
export declare function useEditorModal(): [
    JSX.Element | null,
    (title: string, showModal: (onClose: () => void) => JSX.Element) => void
];
