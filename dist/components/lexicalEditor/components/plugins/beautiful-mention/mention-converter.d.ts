import { LexicalNode, TextNode } from "lexical";
interface MentionEntry {
    type: "mention";
    trigger: string;
    value: string;
}
interface TextEntry {
    type: "text";
    value: string;
}
type Entry = MentionEntry | TextEntry;
export declare function convertToMentionEntries(text: string, triggers: string[], punctuation: string): Entry[];
/**
 * Utility function that takes a string or a text nodes and converts it to a
 * list of mention and text nodes.
 *
 * 🚨 Only works for mentions without spaces. Ensure spaces are disabled
 *  via the `allowSpaces` prop.
 */
export declare function $convertToMentionNodes(textOrNode: string | TextNode, triggers: string[], punctuation?: string): LexicalNode[];
/**
 * Transforms text nodes containing mention strings into mention nodes.
 *
 *  🚨 Only works for mentions without spaces. Ensure spaces are disabled
 *  via the `allowSpaces` prop.
 */
export declare function $transformTextToMentionNodes(triggers: string[], punctuation?: string): void;
export {};
