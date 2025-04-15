import{useRef as r,useMemo as n}from"react";import t from"../../../../node_modules/lodash-es/debounce.js";function e(e,o,u){var c=r(null);return c.current=e,n((function(){return t((function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];c.current&&c.current.apply(c,r)}),o,{maxWait:u})}),[o,u])}export{e as useDebounce};
//# sourceMappingURL=use-debounce.js.map
