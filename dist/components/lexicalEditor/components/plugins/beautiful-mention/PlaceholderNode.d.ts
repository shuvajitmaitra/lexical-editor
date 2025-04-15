import { DOMConversionMap, EditorConfig, ElementNode, SerializedElementNode, type LexicalNode, type NodeKey } from "lexical";
export type SerializedPlaceholderNode = SerializedElementNode;
export declare class PlaceholderNode extends ElementNode {
    private __textContent;
    static getType(): string;
    static clone(node: PlaceholderNode): PlaceholderNode;
    constructor(__textContent: string, key?: NodeKey);
    createDOM(_: EditorConfig): HTMLImageElement;
    updateDOM(): boolean;
    static importDOM(): DOMConversionMap | null;
    static importJSON(_: SerializedPlaceholderNode): PlaceholderNode;
    isInline(): boolean;
    exportJSON(): SerializedPlaceholderNode;
    getTextContent(): string;
}
export declare function $createPlaceholderNode(textContent?: string): PlaceholderNode;
export declare function $isPlaceholderNode(node: LexicalNode | null | undefined): node is PlaceholderNode;
