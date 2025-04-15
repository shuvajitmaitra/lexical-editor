import * as React from 'react';
import { DecoratorNode } from 'lexical';
import { useSharedAutocompleteContext } from '../context/shared-autocomplete-context';
import { uuid as UUID } from '../plugins/autocomplete-plugin';
export class AutocompleteNode extends DecoratorNode {
    static clone(node) {
        return new AutocompleteNode(node.__uuid, node.__key);
    }
    static getType() {
        return 'autocomplete';
    }
    static importJSON(serializedNode) {
        const node = $createAutocompleteNode(serializedNode.uuid);
        return node;
    }
    exportJSON() {
        return Object.assign(Object.assign({}, super.exportJSON()), { type: 'autocomplete', uuid: this.__uuid, version: 1 });
    }
    constructor(uuid, key) {
        super(key);
        this.__uuid = uuid;
    }
    updateDOM(prevNode, dom, config) {
        return false;
    }
    createDOM(config) {
        return document.createElement('span');
    }
    decorate(editor, config) {
        if (this.__uuid !== UUID) {
            return null;
        }
        return <AutocompleteComponent className={config.theme.autocomplete}/>;
    }
}
export function $createAutocompleteNode(uuid) {
    return new AutocompleteNode(uuid);
}
function AutocompleteComponent({ className, }) {
    const [suggestion] = useSharedAutocompleteContext();
    const userAgentData = window.navigator.userAgentData;
    const isMobile = userAgentData !== undefined
        ? userAgentData.mobile
        : window.innerWidth <= 800 && window.innerHeight <= 600;
    return (<span className={className} spellCheck="false">
      {suggestion} {isMobile ? '(SWIPE \u2B95)' : '(TAB)'}
    </span>);
}
//# sourceMappingURL=autocomplete-node.jsx.map