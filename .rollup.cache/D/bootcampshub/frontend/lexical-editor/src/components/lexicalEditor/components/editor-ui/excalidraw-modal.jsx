import * as React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
// import {
//   AppState,
//   BinaryFiles,
//   ExcalidrawImperativeAPI,
//   ExcalidrawInitialDataState,
// } from '@excalidraw/excalidraw/types/types'
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from '../../ui/button';
import { Dialog, DialogClose, DialogContent, } from '../../ui/dialog';
const Excalidraw = dynamic(() => import('./excalidraw'), { ssr: false });
export const useCallbackRefState = () => {
    const [refValue, setRefValue] = React.useState(null);
    const refCallback = React.useCallback((value) => setRefValue(value), []);
    return [refValue, refCallback];
};
/**
 * @explorer-desc
 * A component which renders a modal with Excalidraw (a painting app)
 * which can be used to export an editable image
 */
export function ExcalidrawModal({ closeOnClickOutside = false, onSave, initialElements, initialAppState, initialFiles, isShown = false, onDelete, onClose, }) {
    const excaliDrawModelRef = useRef(null);
    const [excalidrawAPI, excalidrawAPIRefCallback] = useCallbackRefState();
    const [discardModalOpen, setDiscardModalOpen] = useState(false);
    const [elements, setElements] = useState(initialElements);
    const [files, setFiles] = useState(initialFiles);
    useEffect(() => {
        if (excaliDrawModelRef.current !== null) {
            excaliDrawModelRef.current.focus();
        }
    }, []);
    useEffect(() => {
        var _a;
        let modalOverlayElement = null;
        const clickOutsideHandler = (event) => {
            const target = event.target;
            if (excaliDrawModelRef.current !== null &&
                !excaliDrawModelRef.current.contains(target) &&
                closeOnClickOutside) {
                onDelete();
            }
        };
        if (excaliDrawModelRef.current !== null) {
            modalOverlayElement = (_a = excaliDrawModelRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
            if (modalOverlayElement !== null) {
                modalOverlayElement === null || modalOverlayElement === void 0 ? void 0 : modalOverlayElement.addEventListener('click', clickOutsideHandler);
            }
        }
        return () => {
            if (modalOverlayElement !== null) {
                modalOverlayElement === null || modalOverlayElement === void 0 ? void 0 : modalOverlayElement.removeEventListener('click', clickOutsideHandler);
            }
        };
    }, [closeOnClickOutside, onDelete]);
    useLayoutEffect(() => {
        const currentModalRef = excaliDrawModelRef.current;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                onDelete();
            }
        };
        if (currentModalRef !== null) {
            currentModalRef.addEventListener('keydown', onKeyDown);
        }
        return () => {
            if (currentModalRef !== null) {
                currentModalRef.removeEventListener('keydown', onKeyDown);
            }
        };
    }, [elements, files, onDelete]);
    const save = () => {
        if (elements && elements.filter((el) => !el.isDeleted).length > 0) {
            const appState = excalidrawAPI === null || excalidrawAPI === void 0 ? void 0 : excalidrawAPI.getAppState();
            // We only need a subset of the state
            const partialState = {
                exportBackground: appState === null || appState === void 0 ? void 0 : appState.exportBackground,
                exportScale: appState === null || appState === void 0 ? void 0 : appState.exportScale,
                exportWithDarkMode: (appState === null || appState === void 0 ? void 0 : appState.theme) === 'dark',
                isBindingEnabled: appState === null || appState === void 0 ? void 0 : appState.isBindingEnabled,
                isLoading: appState === null || appState === void 0 ? void 0 : appState.isLoading,
                name: appState === null || appState === void 0 ? void 0 : appState.name,
                theme: appState === null || appState === void 0 ? void 0 : appState.theme,
                viewBackgroundColor: appState === null || appState === void 0 ? void 0 : appState.viewBackgroundColor,
                viewModeEnabled: appState === null || appState === void 0 ? void 0 : appState.viewModeEnabled,
                zenModeEnabled: appState === null || appState === void 0 ? void 0 : appState.zenModeEnabled,
                zoom: appState === null || appState === void 0 ? void 0 : appState.zoom,
            };
            onSave(elements, partialState, files);
        }
        else {
            // delete node if the scene is clear
            onDelete();
        }
    };
    const discard = () => {
        setDiscardModalOpen(true);
    };
    function ShowDiscardDialog() {
        return (<Dialog open={discardModalOpen} onOpenChange={setDiscardModalOpen}>
        <DialogContent>
          Are you sure you want to discard the changes?
        </DialogContent>
        <DialogClose asChild>
          <Button onClick={() => {
                setDiscardModalOpen(false);
                onClose();
            }}>
            Discard
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button onClick={() => setDiscardModalOpen(false)}>Cancel</Button>
        </DialogClose>
      </Dialog>);
    }
    if (isShown === false) {
        return null;
    }
    const onChange = (els, _, fls) => {
        setElements(els);
        setFiles(fls);
    };
    return (<Dialog open={isShown}>
      <DialogTrigger />
      <DialogContent className="h-4/6  overflow-hidden p-0 w-[90vw]">
        <div className="relative" role="dialog">
          <div className="h-full w-full" ref={excaliDrawModelRef} tabIndex={-1}>
            <div className="h-full w-full">
              {discardModalOpen && <ShowDiscardDialog />}
              <Excalidraw onChange={onChange} excalidrawAPI={excalidrawAPIRefCallback} initialData={{
            appState: initialAppState || { isLoading: false },
            elements: initialElements,
            files: initialFiles,
        }}/>
              <div className="flex h-full items-center justify-center">
                Loading...
              </div>
              <div className="absolute bottom-0 bottom-5 right-1/2 z-10 flex translate-x-1/2 gap-2">
                <Button variant="outline" onClick={onClose}>
                  Discard
                </Button>
                <Button onClick={save}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>);
}
//# sourceMappingURL=excalidraw-modal.jsx.map