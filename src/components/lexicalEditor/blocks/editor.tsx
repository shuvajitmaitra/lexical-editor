'use client'

import {
  InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { EditorState, SerializedEditorState } from 'lexical'

import { FloatingLinkContext } from '../components/context/floating-link-context'
import { SharedAutocompleteContext } from '../components/context/shared-autocomplete-context'
import { editorTheme } from '../components/themes/editor-theme'
import { TooltipProvider } from '../ui/tooltip'

import { nodes } from './nodes'
import { Plugins } from './plugins'

// Define plugin options interface for type safety
export interface PluginOptions {
  history?: boolean;
  autoFocus?: boolean;
  richText?: boolean;
  checkList?: boolean;
  horizontalRule?: boolean;
  table?: boolean;
  list?: boolean;
  tabIndentation?: boolean;
  hashtag?: boolean;
  mentions?: boolean;
  draggableBlock?: boolean;
  images?: boolean;
  inlineImage?: boolean;
  excalidraw?: boolean;
  poll?: boolean;
  equations?: boolean;
  autoEmbed?: boolean;
  figma?: boolean;
  twitter?: boolean;
  youtube?: boolean;
  codeHighlight?: boolean;
  markdownShortcut?: boolean;
  autoLink?: boolean;
  link?: boolean;
  componentPicker?: boolean;
  contextMenu?: boolean;
  dragDropPaste?: boolean;
  emojiPicker?: boolean;
  floatingLinkEditor?: boolean;
  floatingTextFormat?: boolean;
  maxIndentLevel?: boolean;
  beautifulMentions?: boolean;
  showToolbar?: boolean;
  showBottomBar?: boolean;
}

const editorConfig: InitialConfigType = {
  namespace: 'Editor',
  theme: editorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error)
  },
}

export function Editor({
  editorState,
  editorSerializedState,
  onChange,
  onSerializedChange,
  pluginOptions = {}, // Add the pluginOptions prop with empty default
  maxLength = 5000,
  height = '70vh',
  showBottomBar = true,
  onMentionSearch,
  onImageUpload,
}: {
  editorState?: EditorState
  editorSerializedState?: SerializedEditorState
  onChange?: (editorState: EditorState) => void
  onSerializedChange?: (editorSerializedState: SerializedEditorState) => void
  pluginOptions?: PluginOptions
  maxLength?: number
  height?: string
  showBottomBar?: boolean
  onMentionSearch?: (trigger: string, query?: string | null) => Promise<any[]>
  onImageUpload?: (file: File) => Promise<any | { url: string }>
}) {
  return (
    <div 
      className="overflow-hidden rounded-lg border bg-background shadow flex flex-col"
      style={{ height }}
    >
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
          ...(editorState ? { editorState } : {}),
          ...(editorSerializedState
            ? { editorState: JSON.stringify(editorSerializedState) }
            : {}),
        }}
      >
        <TooltipProvider>
          <SharedAutocompleteContext>
            <FloatingLinkContext>
              <div className="flex flex-col h-full">
                <Plugins
                  maxLength={maxLength}
                  showBottomBar={showBottomBar}
                  pluginOptions={pluginOptions}
                  onMentionSearch={onMentionSearch}
                  onImageUpload={onImageUpload}
                />
              </div>

              <OnChangePlugin
                ignoreSelectionChange={true}
                onChange={(editorState) => {
                  onChange?.(editorState)
                  onSerializedChange?.(editorState.toJSON())
                }}
              />
            </FloatingLinkContext>
          </SharedAutocompleteContext>
        </TooltipProvider>
      </LexicalComposer>
    </div>
  )
}