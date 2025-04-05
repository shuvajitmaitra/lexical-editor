'use client'

import { useEffect, useState } from 'react'
import { $getRoot, $isTextNode, EditorState, SerializedEditorState } from 'lexical'
import { Editor } from '@/components/lexicalEditor/blocks/editor'

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

// Default value for the editor
const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: 'Hello World 🚀',
            type: 'text',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
} as unknown as SerializedEditorState

export default function EditorDemo() {
  const [editorState, setEditorState] = useState<SerializedEditorState>(initialValue)
  
  // Define which plugins to enable (default all enabled)
  const [pluginOptions, setPluginOptions] = useState<PluginOptions>({
    history: true,
    autoFocus: true,
    richText: true,
    checkList: true,
    horizontalRule: true, 
    table: true,
    list: true,
    tabIndentation: true,
    hashtag: true,
    mentions: true,
    draggableBlock: true,
    images: true,
    inlineImage: true,
    excalidraw: true,
    poll: true,
    equations: true,
    autoEmbed: true,
    figma: true,
    twitter: true,
    youtube: true,
    codeHighlight: true,
    markdownShortcut: true,
    autoLink: true,
    link: true,
    componentPicker: true,
    contextMenu: true,
    dragDropPaste: true,
    emojiPicker: true,
    floatingLinkEditor: true,
    floatingTextFormat: true,
    maxIndentLevel: true,
    beautifulMentions: true,
    showToolbar: true,
    showBottomBar: true,
  });

  // Toggle function to enable/disable plugins
  const togglePlugin = (pluginName: keyof PluginOptions) => {
    setPluginOptions(prev => ({
      ...prev,
      [pluginName]: !prev[pluginName]
    }));
  };
  
  // Custom mention search handler
  const handleMentionSearch = async (trigger: string, query?: string | null) => {
    console.log(`Searching for mentions with trigger: ${trigger}, query: ${query}`);
    
    // You can customize this to fetch from your own API

    
   const searchQuery = query || '';
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?trigger=${trigger}&query=${searchQuery}`
    );
    const data = await response.json();

    return data?.map((x: { name: string; id: string | number }) => ({
      value: x?.name,
      id: x?.id
    }));
  };
  
  // Custom image upload handler
  const handleImageUpload = async (file: File) => {
    console.log(`Uploading image: ${file.name}`);
    
    // Here you would typically:
    // 1. Create a FormData object
    // 2. Append the file
    // 3. Send to your server/CDN
    // 4. Return the URL
    
    // For demo purposes, we'll create a fake delay and return a placeholder URL
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Return a mock URL - in a real implementation, this would be the URL returned by your server
        resolve({ 
          url: URL.createObjectURL(file) 
          // In production, this would be something like:
          // url: 'https://your-cdn.com/images/uploaded-image-123.jpg'
        });
      }, 1000);
    });

    //return error
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Image upload failed dfhfgh'));
      }, 1000);
    });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* <div className="p-4 bg-gray-100 border-b">
        <h1 className="text-xl font-bold mb-2">Plugin Controls</h1>
        <div className="grid grid-cols-4 gap-2">
          {Object.keys(pluginOptions).map((plugin) => (
            <label key={plugin} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={pluginOptions[plugin as keyof PluginOptions]}
                onChange={() => togglePlugin(plugin as keyof PluginOptions)}
                className="rounded"
              />
              <span>{plugin}</span>
            </label>
          ))}
        </div>
      </div> */}
      
      <div className="flex-1">
        <Editor
          onChange={(value) => {
            // console.log(value);
          }}
          height="100%"
          editorSerializedState={editorState}
          onSerializedChange={(value) => setEditorState(value)}
          pluginOptions={pluginOptions}
          showBottomBar={pluginOptions.showBottomBar}
          maxLength={50000}
          onImageUpload={handleImageUpload}
          onMentionSearch={handleMentionSearch}
          
        />
      </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'; // or whatever setting you need