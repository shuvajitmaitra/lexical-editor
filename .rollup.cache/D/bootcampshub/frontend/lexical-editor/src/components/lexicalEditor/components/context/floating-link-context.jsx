import { createContext, useContext, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
const Context = createContext({
    isLinkEditMode: false,
    setIsLinkEditMode: () => { },
});
export function FloatingLinkContext({ children, }) {
    const [isLinkEditMode, setIsLinkEditMode] = useState(false);
    const [editor] = useLexicalComposerContext();
    //   const handleClick = (editor: LexicalEditor) => {
    //     editor.update(() => {
    //       const editorState = editor.getEditorState();
    //       const jsonString = JSON.stringify(editorState);
    //       console.log('jsonString', jsonString);
    //       const htmlString = $generateHtmlFromNodes(editor, null);
    //       console.log('htmlString', htmlString);
    //     });
    //   };
    // handleClick(editor)
    return (<Context.Provider value={{ isLinkEditMode, setIsLinkEditMode }}>
      {children}
    </Context.Provider>);
}
export function useFloatingLinkContext() {
    if (!Context) {
        throw new Error('useFloatingLinkContext must be used within a FloatingLinkContext');
    }
    return useContext(Context);
}
//# sourceMappingURL=floating-link-context.jsx.map