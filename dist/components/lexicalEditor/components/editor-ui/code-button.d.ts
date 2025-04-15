import * as React from 'react';
import { LexicalEditor } from 'lexical';
interface Props {
    editor: LexicalEditor;
    getCodeDOMNode: () => HTMLElement | null;
}
export declare function CopyButton({ editor, getCodeDOMNode }: Props): React.JSX.Element;
export {};
