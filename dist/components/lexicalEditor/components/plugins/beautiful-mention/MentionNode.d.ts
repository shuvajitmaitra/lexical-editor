import { DOMConversionMap, DOMExportOutput, DecoratorNode, LexicalEditor, SerializedLexicalNode, Spread, type EditorConfig, type LexicalNode, type NodeKey } from "lexical";
import React, { ElementType } from "react";
import { BeautifulMentionComponentProps, BeautifulMentionsItemData } from "./BeautifulMentionsPluginProps";
export type SerializedBeautifulMentionNode = Spread<{
    trigger: string;
    value: string;
    data?: Record<string, BeautifulMentionsItemData>;
}, SerializedLexicalNode>;
/**
 * This node is used to represent a mention used in the BeautifulMentionPlugin.
 */
export declare class BeautifulMentionNode extends DecoratorNode<React.JSX.Element> {
    __trigger: string;
    __value: string;
    __data?: Record<string, BeautifulMentionsItemData>;
    static getType(): string;
    static clone(node: BeautifulMentionNode): BeautifulMentionNode;
    constructor(trigger: string, value: string, data?: Record<string, BeautifulMentionsItemData>, key?: NodeKey);
    createDOM(): HTMLElement;
    updateDOM(): boolean;
    exportDOM(): DOMExportOutput;
    static importDOM(): DOMConversionMap | null;
    static importJSON(serializedNode: SerializedBeautifulMentionNode): BeautifulMentionNode;
    exportJSON(): SerializedBeautifulMentionNode;
    getTextContent(): string;
    getTrigger(): string;
    getValue(): string;
    setValue(value: string): void;
    getData(): Record<string, BeautifulMentionsItemData> | undefined;
    setData(data?: Record<string, BeautifulMentionsItemData>): void;
    component(): ElementType<BeautifulMentionComponentProps> | null;
    decorate(_editor: LexicalEditor, config: EditorConfig): React.JSX.Element;
    getCssClassesFromTheme(config: EditorConfig): {
        className: string | undefined;
        classNameFocused: string | undefined;
        classNames: import("./theme").BeautifulMentionsCssClassNames | undefined;
    };
}
export declare function $createBeautifulMentionNode(trigger: string, value: string, data?: Record<string, BeautifulMentionsItemData>): BeautifulMentionNode;
export declare function $isBeautifulMentionNode(node: LexicalNode | null | undefined): node is BeautifulMentionNode;
