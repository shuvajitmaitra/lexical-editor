import { PluginOptions } from './editor';
export declare const placeholder = "Press / for commands...";
export declare function Plugins({ maxLength, pluginOptions, onMentionSearch, onImageUpload, onAIGeneration, mentionMenu, mentionMenuItem, }: {
    maxLength?: number;
    pluginOptions?: PluginOptions;
    onMentionSearch?: (trigger: string, query?: string | null) => Promise<any[]>;
    onImageUpload?: (file: File) => Promise<any | {
        url: string;
    }>;
    onAIGeneration?: (prompt: string, transformType: string) => Promise<{
        text: string;
        success: boolean;
        error?: string;
    }>;
    mentionMenu?: React.ComponentType<any>;
    mentionMenuItem?: React.ComponentType<any>;
}): import("react").JSX.Element;
