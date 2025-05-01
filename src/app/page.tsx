"use client";

import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import { SerializedEditorState } from "lexical";
import { Editor, PluginOptions } from "@/components/lexicalEditor/blocks/editor";
import { MentionMenu, MentionMenuItem } from "@/components/lexicalEditor/components/editor-ui/MentionMenu";

const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
} as unknown as SerializedEditorState;

export default function MinimalEditor() {
  const [editorState, setEditorState] = useState<SerializedEditorState>(initialValue);

  const pluginOptions: PluginOptions = {
    history: true,
    autoFocus: true,
    richText: true,
    list: true,
    link: true,
    autoLink: true,
    checkList: false,
    horizontalRule: false,
    table: false,
    excalidraw: false,
    poll: false,
    equations: false,
    autoEmbed: false,
    figma: false,
    twitter: false,
    youtube: false,
    draggableBlock: false,
    showToolbar: true,
    showBottomBar: false,
    toolbar: {
      history: true,
      blockFormat: true,
      fontFamily: false,
      fontSize: false,
      fontFormat: {
        bold: true,
        italic: true,
        underline: true,
        strikethrough: false,
      },
      subSuper: false,
      clearFormatting: true,
      fontColor: false,
      fontBackground: false,
      elementFormat: true,
      blockInsert: {
        horizontalRule: false,
        pageBreak: false,
        image: true,
        inlineImage: false,
        collapsible: false,
        excalidraw: false,
        table: false,
        poll: false,
        columnsLayout: false,
        embeds: false,
      },
    },
    actionBar: {
      maxLength: false,
      characterLimit: false,
      counter: false,
      speechToText: false,
      shareContent: false,
      markdownToggle: false,
      editModeToggle: false,
      clearEditor: false,
      treeView: false,
    },
  };

  const handleImageUpload = async (file: File) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          url: URL.createObjectURL(file),
        });
      }, 1000);
    });
  };

  const handleAIGeneration = async (prompt: string, transformType: string) => {
    try {
      const response = await fetch("https://staging-api.bootcampshub.ai/api/organization/integration/generate-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVmNjc2NjY5ZWFmNjM3MGMxMTQyOWMiLCJlbWFpbCI6IjE4Nm1kc2hpbXVsQGdtYWlsLmNvbSIsImJyYW5jaCI6IjY0ZmNiNGU4OTQ0Y2YyMTVkOGQzMmY5NSIsIm9yZ2FuaXphdGlvbiI6IjY0ZmNiMmU2MGQyZjg3N2FhY2NiM2IyNiIsInNvdXJjZSI6ImJyYW5jaCIsImZpcnN0TmFtZSI6IkFzaHJhZnVsIiwibGFzdE5hbWUiOiJJc2xhbSIsInByb2ZpbGVQaWN0dXJlIjoiaHR0cHM6Ly90czR1cG9ydGFsLWFsbC1maWxlcy11cGxvYWQubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLzE3MTkzODA2Nzg2MTEtU2NyZWVuc2hvdC0yMDI0IiwiaWF0IjoxNzQ0MDU1MzI4LCJleHAiOjE3NDQ2NjAxMjh9.8T76uwuBuKr_qOCnKAe0b-npvE44RxlvlIbkSVKYxRI",
          branch: "64fcb4e8944cf215d8d32f95",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (data.success) {
        return { text: data.text, success: true };
      } else {
        return { text: "", success: false, error: data.error };
      }
    } catch (error) {
      return { text: "", success: false, error: "Failed to connect to AI service" };
    }
  };

  const handleMentionSearch = async (trigger: string, query?: string | null) => {
    const searchQuery = query || "";
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?trigger=${trigger}&query=${searchQuery}`);
    const data = await response.json();

    return data?.map((x: { name: string; id: string | number; avatar: string }) => ({
      value: x?.name,
      id: x?.id,
      avatar: x?.avatar || `https://placehold.co/400`,
    }));
  };

  const handleChangeRn = useCallback(
    debounce((value: SerializedEditorState) => {
      (window as any).ReactNativeWebView?.postMessage(JSON.stringify({ type: "DOC_CHANGE", payload: value }));
    }, 300),
    []
  );

  useEffect(() => {
    (window as any).setEditorContent = (contentObj: SerializedEditorState) => {
      try {
        if (contentObj && contentObj.root) {
          setEditorState(contentObj);
          (window as any).ReactNativeWebView?.postMessage(JSON.stringify({ type: "CONTENT_SET_SUCCESS" }));
          return true;
        } else {
          throw new Error("Invalid content structure");
        }
      } catch (error: any) {
        (window as any).ReactNativeWebView?.postMessage(JSON.stringify({ type: "CONTENT_SET_ERROR", error: error.toString() }));
        return false;
      }
    };

    function handleNativeMessage(e: MessageEvent<string>) {
      try {
        const msg = JSON.parse(e.data) as any;
        switch (msg.type) {
          case "SET_CONTENT":
            try {
              const newState = typeof msg.payload === "string" ? JSON.parse(msg.payload) : msg.payload;
              setEditorState(newState);
              (window as any).ReactNativeWebView?.postMessage(JSON.stringify({ type: "CONTENT_SET_SUCCESS" }));
            } catch (error: any) {
              (window as any).ReactNativeWebView?.postMessage(JSON.stringify({ type: "CONTENT_SET_ERROR", error: error.toString() }));
            }
            break;
          case "FOCUS_EDITOR":
            break;
        }
      } catch (error) {
        (window as any).ReactNativeWebView?.postMessage(JSON.stringify({ type: "CONTENT_SET_ERROR", error: "Invalid message format" }));
      }
    }

    window.addEventListener("message", handleNativeMessage);
    (window as any).ReactNativeWebView?.postMessage(JSON.stringify({ type: "LEXICAL_EDITOR_READY" }));
    return () => {
      window.removeEventListener("message", handleNativeMessage);
      delete (window as any).setEditorContent;
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <Editor
          onChange={() => {}}
          height="100%"
          editorSerializedState={editorState}
          onSerializedChange={(value) => {
            setEditorState(value);
            handleChangeRn(value);
          }}
          pluginOptions={pluginOptions}
          maxLength={50000}
          onImageUpload={handleImageUpload}
          onAIGeneration={handleAIGeneration}
          onMentionSearch={handleMentionSearch}
          mentionMenu={MentionMenu}
          mentionMenuItem={MentionMenuItem}
        />
      </div>
    </div>
  );
}
