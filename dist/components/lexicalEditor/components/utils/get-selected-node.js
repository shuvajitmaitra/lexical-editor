import{$isAtNodeEnd as e}from"../../../../node_modules/@lexical/selection/LexicalSelection.mjs.js";function o(o){var c=o.anchor,r=o.focus,n=o.anchor.getNode(),t=o.focus.getNode();return n===t?n:o.isBackward()?e(r)?n:t:e(c)?n:t}export{o as getSelectedNode};
//# sourceMappingURL=get-selected-node.js.map
