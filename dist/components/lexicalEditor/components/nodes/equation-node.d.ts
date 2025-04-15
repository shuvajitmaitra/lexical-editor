import { JSX } from 'react';
import type { DOMConversionMap, EditorConfig, LexicalNode, NodeKey, SerializedLexicalNode, Spread } from 'lexical';
import { DOMExportOutput, DecoratorNode } from 'lexical';
export type SerializedEquationNode = Spread<{
    equation: string;
    inline: boolean;
}, SerializedLexicalNode>;
export declare class EquationNode extends DecoratorNode<JSX.Element> {
    __equation: string;
    __inline: boolean;
    static getType(): string;
    static clone(node: EquationNode): EquationNode;
    constructor(equation: string, inline?: boolean, key?: NodeKey);
    static importJSON(serializedNode: SerializedEquationNode): EquationNode;
    exportJSON(): SerializedEquationNode;
    createDOM(_config: EditorConfig): HTMLElement;
    exportDOM(): DOMExportOutput;
    static importDOM(): DOMConversionMap | null;
    updateDOM(prevNode: EquationNode): boolean;
    getTextContent(): string;
    getEquation(): string;
    setEquation(equation: string): void;
    decorate(): JSX.Element;
}
export declare function $createEquationNode(equation?: string, inline?: boolean): EquationNode;
export declare function $isEquationNode(node: LexicalNode | null | undefined): node is EquationNode;
