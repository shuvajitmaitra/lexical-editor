'use client';
import { useState } from 'react';
import { $isTableSelection } from '@lexical/table';
import { $isRangeSelection, FORMAT_TEXT_COMMAND, } from 'lexical';
import { BoldIcon, CodeIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon, } from 'lucide-react';
import { Toggle } from '../../../ui/toggle';
import { useToolbarContext } from '../../context/toolbar-context';
import { useUpdateToolbarHandler } from '../../editor-hooks/use-update-toolbar';
const Icons = {
    bold: BoldIcon,
    italic: ItalicIcon,
    underline: UnderlineIcon,
    strikethrough: StrikethroughIcon,
    code: CodeIcon,
};
export function FontFormatToolbarPlugin({ format, }) {
    const { activeEditor } = useToolbarContext();
    const [isSelected, setIsSelected] = useState(false);
    const $updateToolbar = (selection) => {
        if ($isRangeSelection(selection) || $isTableSelection(selection)) {
            // @ts-ignore
            setIsSelected(selection.hasFormat(format));
        }
    };
    useUpdateToolbarHandler($updateToolbar);
    const Icon = Icons[format];
    return (<Toggle aria-label="Toggle bold" variant="outline" size="sm" defaultPressed={isSelected} pressed={isSelected} onPressedChange={setIsSelected} onClick={() => {
            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
        }}>
      <Icon className="h-4 w-4"/>
    </Toggle>);
}
//# sourceMappingURL=font-format-toolbar-plugin.jsx.map