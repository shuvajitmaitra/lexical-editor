import { EditorState, SerializedEditorState } from 'lexical';
export interface PluginOptions {
    history?: boolean;
    autoFocus?: boolean;
    richText?: boolean;
    checkList?: boolean;
    horizontalRule?: boolean;
    table?: boolean;
    list?: boolean;
    tabIndentation?: boolean;
    hashtag?: boolean;
    mentions?: boolean;
    draggableBlock?: boolean;
    images?: boolean;
    inlineImage?: boolean;
    excalidraw?: boolean;
    poll?: boolean;
    equations?: boolean;
    autoEmbed?: boolean;
    figma?: boolean;
    twitter?: boolean;
    youtube?: boolean;
    codeHighlight?: boolean;
    markdownShortcut?: boolean;
    autoLink?: boolean;
    link?: boolean;
    componentPicker?: boolean;
    contextMenu?: boolean;
    dragDropPaste?: boolean;
    emojiPicker?: boolean;
    floatingLinkEditor?: boolean;
    floatingTextFormat?: boolean;
    maxIndentLevel?: boolean;
    beautifulMentions?: boolean;
    showToolbar?: boolean;
    showBottomBar?: boolean;
    toolbar?: {
        history?: boolean;
        blockFormat?: boolean;
        codeLanguage?: boolean;
        fontFamily?: boolean;
        fontSize?: boolean;
        fontFormat?: {
            bold?: boolean;
            italic?: boolean;
            underline?: boolean;
            strikethrough?: boolean;
        };
        subSuper?: boolean;
        link?: boolean;
        clearFormatting?: boolean;
        fontColor?: boolean;
        fontBackground?: boolean;
        elementFormat?: boolean;
        blockInsert?: {
            horizontalRule?: boolean;
            pageBreak?: boolean;
            image?: boolean;
            inlineImage?: boolean;
            collapsible?: boolean;
            excalidraw?: boolean;
            table?: boolean;
            poll?: boolean;
            columnsLayout?: boolean;
            embeds?: boolean;
        };
    };
    actionBar?: {
        maxLength?: boolean;
        characterLimit?: boolean;
        counter?: boolean;
        speechToText?: boolean;
        shareContent?: boolean;
        markdownToggle?: boolean;
        editModeToggle?: boolean;
        clearEditor?: boolean;
        treeView?: boolean;
    };
    [key: string]: any;
}
export declare function Editor({ editorState, editorSerializedState, onChange, onSerializedChange, pluginOptions, // Add the pluginOptions prop with empty default
maxLength, height, onMentionSearch, onImageUpload, onAIGeneration, mentionMenu, mentionMenuItem, }: {
    editorState?: EditorState;
    editorSerializedState?: SerializedEditorState;
    onChange?: (editorState: EditorState) => void;
    onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
    pluginOptions?: PluginOptions;
    maxLength?: number;
    height?: string;
    showBottomBar?: boolean;
    onMentionSearch?: (trigger: string, query?: string | null) => Promise<any[]>;
    onImageUpload?: (file: File) => Promise<any | {
        url: string;
    }>;
    onAIGeneration?: (prompt: string, transformType: string) => Promise<{
        text: string;
        success: boolean;
        error?: string;
    }>;
    mentionMenu?: React.FC<any>;
    mentionMenuItem?: React.FC<any>;
}): import("react").JSX.Element;
