import type { LexicalCommand } from 'lexical';
export declare const SPEECH_TO_TEXT_COMMAND: LexicalCommand<boolean>;
declare global {
    interface Window {
        SpeechRecognition?: any;
        webkitSpeechRecognition?: any;
    }
}
export declare const SUPPORT_SPEECH_RECOGNITION: boolean;
declare function SpeechToTextPluginImpl(): import("react").JSX.Element;
export declare const SpeechToTextPlugin: typeof SpeechToTextPluginImpl | (() => null);
export {};
