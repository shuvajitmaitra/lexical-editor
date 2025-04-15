'use client';
import { useCallback, useState } from 'react';
import { $getSelectionStyleValueForProperty, $patchStyleText, } from '@lexical/selection';
import { $getSelection, $isRangeSelection } from 'lexical';
import { BaselineIcon } from 'lucide-react';
import { useToolbarContext } from '../../context/toolbar-context';
import { useUpdateToolbarHandler } from '../../editor-hooks/use-update-toolbar';
import ColorPicker from '../../editor-ui/colorpicker';
export function FontColorToolbarPlugin() {
    const { activeEditor } = useToolbarContext();
    const [fontColor, setFontColor] = useState('#000');
    const $updateToolbar = (selection) => {
        if ($isRangeSelection(selection)) {
            setFontColor($getSelectionStyleValueForProperty(selection, 'color', '#000'));
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
    const onFontColorSelect = useCallback((value, skipHistoryStack) => {
        applyStyleText({ color: value }, skipHistoryStack);
    }, [applyStyleText]);
    return (<ColorPicker icon={<BaselineIcon className="size-4"/>} color={fontColor} onChange={onFontColorSelect} title="text color"/>);
}
//# sourceMappingURL=font-color-toolbar-plugin.jsx.map