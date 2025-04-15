'use client';
import { useCallback, useState } from 'react';
import { $getSelectionStyleValueForProperty, $patchStyleText, } from '@lexical/selection';
import { $getSelection, $isRangeSelection } from 'lexical';
import { PaintBucketIcon } from 'lucide-react';
import { useToolbarContext } from '../../context/toolbar-context';
import { useUpdateToolbarHandler } from '../../editor-hooks/use-update-toolbar';
import ColorPicker from '../../editor-ui/colorpicker';
export function FontBackgroundToolbarPlugin() {
    const { activeEditor } = useToolbarContext();
    const [bgColor, setBgColor] = useState('#fff');
    const $updateToolbar = (selection) => {
        if ($isRangeSelection(selection)) {
            setBgColor($getSelectionStyleValueForProperty(selection, 'background-color', '#fff'));
        }
    };
    useUpdateToolbarHandler($updateToolbar);
    const applyStyleText = useCallback((styles, skipHistoryStack) => {
        activeEditor.update(() => {
            const selection = $getSelection();
            if (selection !== null) {
                $patchStyleText(selection, styles);
            }
        }, skipHistoryStack ? { tag: 'historic' } : {});
    }, [activeEditor]);
    const onBgColorSelect = useCallback((value, skipHistoryStack) => {
        applyStyleText({ 'background-color': value }, skipHistoryStack);
    }, [applyStyleText]);
    return (<ColorPicker icon={<PaintBucketIcon className="size-4"/>} color={bgColor} onChange={onBgColorSelect} title="text background color"/>);
}
//# sourceMappingURL=font-background-toolbar-plugin.jsx.map