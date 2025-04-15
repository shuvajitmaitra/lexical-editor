import * as React from 'react';
type Props = {
    disabled?: boolean;
    icon?: React.ReactNode;
    label?: string;
    title?: string;
    stopCloseOnClickSelf?: boolean;
    color: string;
    onChange?: (color: string, skipHistoryStack: boolean) => void;
};
export default function ColorPicker({ disabled, stopCloseOnClickSelf, color, onChange, icon, label, ...rest }: Props): React.JSX.Element;
export {};
