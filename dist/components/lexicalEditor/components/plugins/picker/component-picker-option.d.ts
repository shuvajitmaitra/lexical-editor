import { LexicalEditor } from "lexical";
import { MenuOption } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { JSX } from "react";
export declare class ComponentPickerOption extends MenuOption {
    title: string;
    icon?: JSX.Element;
    keywords: Array<string>;
    keyboardShortcut?: string;
    onSelect: (queryString: string, editor: LexicalEditor, showModal: (title: string, showModal: (onClose: () => void) => JSX.Element) => void) => void;
    constructor(title: string, options: {
        icon?: JSX.Element;
        keywords?: Array<string>;
        keyboardShortcut?: string;
        onSelect: (queryString: string, editor: LexicalEditor, showModal: (title: string, showModal: (onClose: () => void) => JSX.Element) => void) => void;
    });
}
