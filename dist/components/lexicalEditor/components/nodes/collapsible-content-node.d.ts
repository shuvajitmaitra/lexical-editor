import { DOMConversionMap, DOMConversionOutput, DOMExportOutput, EditorConfig, ElementNode, LexicalEditor, LexicalNode, SerializedElementNode } from 'lexical';
type SerializedCollapsibleContentNode = SerializedElementNode;
export declare function $convertCollapsibleContentElement(domNode: HTMLElement): DOMConversionOutput | null;
export declare class CollapsibleContentNode extends ElementNode {
    static getType(): string;
    static clone(node: CollapsibleContentNode): CollapsibleContentNode;
    createDOM(config: EditorConfig, editor: LexicalEditor): HTMLElement;
    updateDOM(prevNode: CollapsibleContentNode, dom: HTMLElement): boolean;
    static importDOM(): DOMConversionMap | null;
    exportDOM(): DOMExportOutput;
    static importJSON(serializedNode: SerializedCollapsibleContentNode): CollapsibleContentNode;
    isShadowRoot(): boolean;
    exportJSON(): SerializedCollapsibleContentNode;
}
export declare function $createCollapsibleContentNode(): CollapsibleContentNode;
export declare function $isCollapsibleContentNode(node: LexicalNode | null | undefined): node is CollapsibleContentNode;
export {};
