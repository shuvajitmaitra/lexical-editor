import { TextNode } from 'lexical';
export class KeywordNode extends TextNode {
    static getType() {
        return 'keyword';
    }
    static clone(node) {
        return new KeywordNode(node.__text, node.__key);
    }
    static importJSON(serializedNode) {
        const node = $createKeywordNode(serializedNode.text);
        node.setFormat(serializedNode.format);
        node.setDetail(serializedNode.detail);
        node.setMode(serializedNode.mode);
        node.setStyle(serializedNode.style);
        return node;
    }
    exportJSON() {
        return Object.assign(Object.assign({}, super.exportJSON()), { type: 'keyword', version: 1 });
    }
    createDOM(config) {
        const dom = super.createDOM(config);
        dom.style.cursor = 'default';
        dom.className = 'keyword text-purple-900 font-bold';
        return dom;
    }
    canInsertTextBefore() {
        return false;
    }
    canInsertTextAfter() {
        return false;
    }
    isTextEntity() {
        return true;
    }
}
export function $createKeywordNode(keyword) {
    return new KeywordNode(keyword);
}
export function $isKeywordNode(node) {
    return node instanceof KeywordNode;
}
//# sourceMappingURL=keyword-node.jsx.map