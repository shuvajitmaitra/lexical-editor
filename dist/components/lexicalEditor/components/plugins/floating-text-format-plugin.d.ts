import { JSX } from 'react';
export declare function FloatingTextFormatToolbarPlugin({ anchorElem, onAIGeneration, }: {
    anchorElem: HTMLDivElement | null;
    onAIGeneration?: (prompt: string, transformType: string) => Promise<{
        text: string;
        success: boolean;
        error?: string;
    }>;
}): JSX.Element | null;
