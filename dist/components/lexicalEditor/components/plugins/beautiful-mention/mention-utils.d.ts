import { ElementNode, LexicalEditor, LexicalNode, RangeSelection, TextNode } from "lexical";
import { BeautifulMentionsPluginProps } from "./BeautifulMentionsPluginProps";
interface SelectionInfoBase {
    offset: number;
    type: "text" | "element";
    textContent: string;
    selection: RangeSelection;
    prevNode: LexicalNode | null;
    nextNode: LexicalNode | null;
    parentNode: ElementNode | null;
    cursorAtStartOfNode: boolean;
    cursorAtEndOfNode: boolean;
    wordCharBeforeCursor: boolean;
    wordCharAfterCursor: boolean;
    spaceBeforeCursor: boolean;
    spaceAfterCursor: boolean;
}
interface TextNodeSelectionInfo extends SelectionInfoBase {
    isTextNode: true;
    node: TextNode;
}
interface LexicalNodeSelectionInfo extends SelectionInfoBase {
    isTextNode: false;
    node: LexicalNode;
}
type SelectionInfo = TextNodeSelectionInfo | LexicalNodeSelectionInfo | undefined;
export declare const DEFAULT_PUNCTUATION = "\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'\"~=<>_:;";
export declare const PRE_TRIGGER_CHARS = "\\(";
export declare const TRIGGERS: (triggers: string[]) => string;
export declare const VALID_CHARS: (triggers: string[], punctuation: string) => string;
export declare const LENGTH_LIMIT = 75;
export declare function isWordChar(char: string, triggers: string[], punctuation: string): boolean;
export declare function $getSelectionInfo(triggers: string[], punctuation: string): SelectionInfo;
/**
 * TODO replace with Node#getPreviousSibling after ZeroWidthNode was removed.
 */
export declare function getNextSibling(node: LexicalNode): LexicalNode | null;
/**
 * TODO replace with Node#getPreviousSibling after ZeroWidthNode was removed.
 */
export declare function getPreviousSibling(node: LexicalNode): LexicalNode | null;
/**
 * TODO replace with Node#getTextContent after ZeroWidthNode was removed.
 */
export declare function getTextContent(node: LexicalNode): string;
export declare function getCreatableProp(creatable: BeautifulMentionsPluginProps["creatable"], trigger: string | null): string | boolean;
export declare function getMenuItemLimitProp(menuItemLimit: BeautifulMentionsPluginProps["menuItemLimit"], trigger: string | null): number | false;
export declare function $selectEnd(): void;
export declare function $findBeautifulMentionNodes(editor?: LexicalEditor): {
    exportJSON(): import("./MentionNode").SerializedBeautifulMentionNode;
    component(): import("react").ElementType<import("./BeautifulMentionsPluginProps").BeautifulMentionComponentProps> | null;
    decorate(editor: LexicalEditor, config: import("lexical").EditorConfig): React.JSX.Element;
    __trigger: string;
    __value: string;
    __data?: Record<string, import("./BeautifulMentionsPluginProps").BeautifulMentionsItemData>;
    createDOM(): HTMLElement;
    updateDOM(): boolean;
    exportDOM(): import("lexical").DOMExportOutput;
    getTextContent(): string;
    getTrigger(): string;
    getValue(): string;
    setValue(value: string): void;
    getData(): Record<string, import("./BeautifulMentionsPluginProps").BeautifulMentionsItemData> | undefined;
    setData(data?: Record<string, import("./BeautifulMentionsPluginProps").BeautifulMentionsItemData>): void;
    getCssClassesFromTheme(config: import("lexical").EditorConfig): {
        className: string | undefined;
        classNameFocused: string | undefined;
        classNames: import("./theme").BeautifulMentionsCssClassNames | undefined;
    };
    getTopLevelElement(): ElementNode | /*elided*/ any | null;
    getTopLevelElementOrThrow(): ElementNode | /*elided*/ any;
    constructor: import("lexical").KlassConstructor<{
        new (key?: import("lexical").NodeKey): import("lexical").DecoratorNode<import("react").JSX.Element>;
        getType(): string;
        clone(_data: unknown): LexicalNode;
        importDOM?: () => import("lexical").DOMConversionMap<any> | null;
        importJSON(_serializedNode: import("lexical").SerializedLexicalNode): LexicalNode;
        transform(): ((node: LexicalNode) => void) | null;
    }>;
    isIsolated(): boolean;
    isInline(): boolean;
    isKeyboardSelectable(): boolean;
    __type: string;
    __key: string;
    __parent: null | import("lexical").NodeKey;
    __prev: null | import("lexical").NodeKey;
    __next: null | import("lexical").NodeKey;
    __state?: import("lexical/LexicalNodeState").NodeState</*elided*/ any> | undefined;
    afterCloneFrom(prevNode: /*elided*/ any): void;
    getType(): string;
    isAttached(): boolean;
    isSelected(selection?: null | import("lexical").BaseSelection): boolean;
    getKey(): import("lexical").NodeKey;
    getIndexWithinParent(): number;
    getParent<T extends ElementNode>(): T | null;
    getParentOrThrow<T extends ElementNode>(): T;
    getParents(): Array<ElementNode>;
    getParentKeys(): Array<import("lexical").NodeKey>;
    getPreviousSibling<T extends LexicalNode>(): T | null;
    getPreviousSiblings<T extends LexicalNode>(): Array<T>;
    getNextSibling<T extends LexicalNode>(): T | null;
    getNextSiblings<T extends LexicalNode>(): Array<T>;
    getCommonAncestor<T extends ElementNode = ElementNode>(node: LexicalNode): T | null;
    is(object: LexicalNode | null | undefined): boolean;
    isBefore(targetNode: LexicalNode): boolean;
    isParentOf(targetNode: LexicalNode): boolean;
    getNodesBetween(targetNode: LexicalNode): Array<LexicalNode>;
    isDirty(): boolean;
    getLatest(): /*elided*/ any;
    getWritable(): /*elided*/ any;
    getTextContentSize(): number;
    updateFromJSON(serializedNode: import("lexical").LexicalUpdateJSON<import("lexical").SerializedLexicalNode>): /*elided*/ any;
    remove(preserveEmptyParent?: boolean): void;
    replace<N extends LexicalNode>(replaceWith: N, includeChildren?: boolean): N;
    insertAfter(nodeToInsert: LexicalNode, restoreSelection?: boolean): LexicalNode;
    insertBefore(nodeToInsert: LexicalNode, restoreSelection?: boolean): LexicalNode;
    isParentRequired(): boolean;
    createParentElementNode(): ElementNode;
    selectStart(): RangeSelection;
    selectEnd(): RangeSelection;
    selectPrevious(anchorOffset?: number, focusOffset?: number): RangeSelection;
    selectNext(anchorOffset?: number, focusOffset?: number): RangeSelection;
    markDirty(): void;
    reconcileObservedMutation(dom: HTMLElement, editor: LexicalEditor): void;
}[];
export {};
