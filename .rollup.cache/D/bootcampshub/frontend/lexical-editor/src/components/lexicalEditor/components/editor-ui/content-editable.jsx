import { ContentEditable as LexicalContentEditable } from '@lexical/react/LexicalContentEditable';
export function ContentEditable({ placeholder, className, placeholderClassName, }) {
    return (<LexicalContentEditable className={className !== null && className !== void 0 ? className : `ContentEditable__root relative block min-h-72 overflow-auto min-h-full px-8 py-4 focus:outline-none`} aria-placeholder={placeholder} placeholder={<div className={placeholderClassName !== null && placeholderClassName !== void 0 ? placeholderClassName : `pointer-events-none absolute left-0 top-0 select-none overflow-hidden text-ellipsis px-8 py-[18px] text-muted-foreground`}>
          {placeholder}
        </div>}/>);
}
//# sourceMappingURL=content-editable.jsx.map