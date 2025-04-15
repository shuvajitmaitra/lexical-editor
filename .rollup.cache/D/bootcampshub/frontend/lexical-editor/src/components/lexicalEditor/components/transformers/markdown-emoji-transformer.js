import { $createTextNode } from 'lexical';
import emojiList from '../utils/emoji-list';
export const EMOJI = {
    dependencies: [],
    export: () => null,
    importRegExp: /:([a-z0-9_]+):/,
    regExp: /:([a-z0-9_]+):/,
    replace: (textNode, [, name]) => {
        var _a;
        const emoji = (_a = emojiList.find((e) => e.aliases.includes(name))) === null || _a === void 0 ? void 0 : _a.emoji;
        if (emoji) {
            textNode.replace($createTextNode(emoji));
        }
    },
    trigger: ':',
    type: 'text-match',
};
//# sourceMappingURL=markdown-emoji-transformer.js.map