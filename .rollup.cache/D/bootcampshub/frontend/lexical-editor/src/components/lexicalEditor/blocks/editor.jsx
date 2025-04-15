'use client';
import { LexicalComposer, } from '@lexical/react/LexicalComposer';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { FloatingLinkContext } from '../components/context/floating-link-context';
import { SharedAutocompleteContext } from '../components/context/shared-autocomplete-context';
import { editorTheme } from '../components/themes/editor-theme';
import { TooltipProvider } from '../ui/tooltip';
import { nodes } from './nodes';
import { Plugins } from './plugins';
const editorConfig = {
    namespace: 'Editor',
    theme: editorTheme,
    nodes,
    onError: (error) => {
        console.error(error);
    },
};
export function Editor({ editorState, editorSerializedState, onChange, onSerializedChange, pluginOptions = {}, // Add the pluginOptions prop with empty default
maxLength = 5000, height = '70vh', onMentionSearch, onImageUpload, onAIGeneration, mentionMenu, mentionMenuItem, }) {
    return (<div className="overflow-hidden rounded-lg border bg-background shadow flex flex-col" style={{ height }}>
      <LexicalComposer initialConfig={Object.assign(Object.assign(Object.assign({}, editorConfig), (editorState ? { editorState } : {})), (editorSerializedState
            ? { editorState: JSON.stringify(editorSerializedState) }
            : {}))}>
        <TooltipProvider>
          <SharedAutocompleteContext>
            <FloatingLinkContext>
              <div className="flex flex-col h-full">
                <Plugins maxLength={maxLength} pluginOptions={pluginOptions} onMentionSearch={onMentionSearch} onImageUpload={onImageUpload} onAIGeneration={onAIGeneration} mentionMenu={mentionMenu} mentionMenuItem={mentionMenuItem}/>
              </div>

              <OnChangePlugin ignoreSelectionChange={true} onChange={(editorState) => {
            onChange === null || onChange === void 0 ? void 0 : onChange(editorState);
            onSerializedChange === null || onSerializedChange === void 0 ? void 0 : onSerializedChange(editorState.toJSON());
        }}/>
            </FloatingLinkContext>
          </SharedAutocompleteContext>
        </TooltipProvider>
      </LexicalComposer>
    </div>);
}
//# sourceMappingURL=editor.jsx.map