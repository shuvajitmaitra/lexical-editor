import type { DOMConversionMap, EditorConfig, LexicalNode, SerializedElementNode } from 'lexical';
import { ElementNode } from 'lexical';
export type SerializedLayoutItemNode = SerializedElementNode;
export declare class LayoutItemNode extends ElementNode {
    static getType(): string;
    static clone(node: LayoutItemNode): LayoutItemNode;
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(): boolean;
    static importDOM(): DOMConversionMap | null;
    static importJSON(): LayoutItemNode;
    isShadowRoot(): boolean;
    exportJSON(): SerializedLayoutItemNode;
}
export declare function $createLayoutItemNode(): LayoutItemNode;
export declare function $isLayoutItemNode(node: LexicalNode | null | undefined): node is LayoutItemNode;
