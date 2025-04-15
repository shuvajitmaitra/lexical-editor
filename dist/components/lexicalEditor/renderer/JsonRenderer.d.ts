import React from 'react';
type LexicalState = {
    root?: {
        children?: LexicalNode[];
    };
};
type LexicalNode = {
    type?: string;
    text?: string;
    style?: string;
    format?: any;
    mode?: string;
    children?: LexicalNode[];
    listType?: string;
    checked?: boolean;
    tag?: string;
    level?: number;
    url?: string;
    newTab?: boolean;
    target?: string;
    src?: string;
    altText?: string;
    width?: number;
    height?: number;
    caption?: string;
    showCaption?: boolean;
    alignment?: string;
    language?: string;
    highlightType?: string;
    colWidths?: number[];
    headerState?: number;
    header?: boolean;
    isHeader?: boolean;
    colSpan?: number;
    rowSpan?: number;
    backgroundColor?: string;
    open?: boolean;
    question?: string;
    options?: {
        uid?: string;
        text?: string;
    }[];
    templateColumns?: string;
    columns?: number;
    equation?: string;
    latex?: string;
    emoji?: string;
    hashtag?: string;
    trigger?: string;
    value?: string;
    data?: any;
    tweetId?: string;
    videoId?: string;
    figmaUrl?: string;
};
/** -------------------------------------------------------------------------
 * Component Props
 * ------------------------------------------------------------------------- */
interface LexicalJsonRendererProps {
    /**
     * The Lexical editor state JSON from the database
     */
    lexicalState?: LexicalState | null;
    /**
     * Whether to display a Table of Contents at the top
     * @default false
     */
    showTOC?: boolean;
    /**
     * Additional CSS classes for the container
     */
    className?: string;
}
/** -------------------------------------------------------------------------
 * React Component
 * ------------------------------------------------------------------------- */
declare const LexicalJsonRenderer: React.FC<LexicalJsonRendererProps>;
export default LexicalJsonRenderer;
