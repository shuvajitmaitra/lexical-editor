import React from 'react';
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
    draggableBlock?: boolean;
    images?: boolean;
    codeHighlight?: boolean;
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
        fontFormat?: {
            bold?: boolean;
            italic?: boolean;
            underline?: boolean;
            strikethrough?: boolean;
        };
        link?: boolean;
        clearFormatting?: boolean;
        blockInsert?: {
            horizontalRule?: boolean;
            image?: boolean;
            table?: boolean;
        };
    };
    actionBar?: {
        maxLength?: boolean;
        characterLimit?: boolean;
        counter?: boolean;
        speechToText?: boolean;
        editModeToggle?: boolean;
        clearEditor?: boolean;
        treeView?: boolean;
    };
    [key: string]: any;
}
/**
 * MarkdownEditor is the main editor component.
 *
 * It initializes the LexicalComposer, loads the initial markdown content (if provided),
 * and uses the OnChangePlugin to trigger updates. The transformer array is memoized
 * to prevent unnecessary re-renders and state resets.
 */
export declare function MarkdownEditor({ onChange, onSerializedChange, pluginOptions, maxLength, height, onMentionSearch, onImageUpload, onAIGeneration, mentionMenu, mentionMenuItem, onMarkdownChange, initialMarkdown, }: {
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
    onMarkdownChange?: (markdown: string) => void;
    initialMarkdown?: string;
}): React.JSX.Element;
