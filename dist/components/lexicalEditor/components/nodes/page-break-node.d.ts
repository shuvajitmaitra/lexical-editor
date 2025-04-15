import { JSX } from 'react';
import { DOMConversionMap, DecoratorNode, LexicalNode, SerializedLexicalNode } from 'lexical';
export type SerializedPageBreakNode = SerializedLexicalNode;
export declare class PageBreakNode extends DecoratorNode<JSX.Element> {
    static getType(): string;
    static clone(node: PageBreakNode): PageBreakNode;
    static importJSON(serializedNode: SerializedPageBreakNode): PageBreakNode;
    static importDOM(): DOMConversionMap | null;
    exportJSON(): SerializedLexicalNode;
    createDOM(): HTMLElement;
    getTextContent(): string;
    isInline(): false;
    updateDOM(): boolean;
    decorate(): JSX.Element;
}
export declare function $createPageBreakNode(): PageBreakNode;
export declare function $isPageBreakNode(node: LexicalNode | null | undefined): node is PageBreakNode;
