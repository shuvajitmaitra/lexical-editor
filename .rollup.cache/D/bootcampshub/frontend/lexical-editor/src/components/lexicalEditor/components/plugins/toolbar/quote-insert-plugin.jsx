'use client';
import { $getSelection, $isRangeSelection, } from 'lexical';
import { QuoteIcon } from 'lucide-react';
import { Toggle } from '../../../ui/toggle';
import { useToolbarContext } from '../../context/toolbar-context';
import { $setBlocksType } from '@lexical/selection';
import { $createQuoteNode } from '@lexical/rich-text';
export function QuotePluginToolbar() {
    const { activeEditor } = useToolbarContext();
    const insertQuote = () => {
        activeEditor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createQuoteNode());
            }
        });
    };
    return (<Toggle size={'sm'} variant={'outline'} aria-label="Toggle link" onClick={insertQuote}>
                <QuoteIcon className="h-4 w-4"/>
            </Toggle>);
}
//# sourceMappingURL=quote-insert-plugin.jsx.map