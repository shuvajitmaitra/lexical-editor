import { JSX } from 'react';
export default function KatexRenderer({ equation, inline, onDoubleClick, }: Readonly<{
    equation: string;
    inline: boolean;
    onDoubleClick: () => void;
}>): JSX.Element;
