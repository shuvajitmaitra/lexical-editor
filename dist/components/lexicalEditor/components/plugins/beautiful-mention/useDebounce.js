import{useState as t,useEffect as r}from"react";function n(n,o){var e=t(n),u=e[0],i=e[1];return r((function(){var t=setTimeout((function(){i(n)}),o);return function(){clearTimeout(t)}}),[n,o]),u}export{n as useDebounce};
//# sourceMappingURL=useDebounce.js.map
