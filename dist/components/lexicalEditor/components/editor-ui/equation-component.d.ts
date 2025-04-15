import { JSX } from 'react';
import { NodeKey } from 'lexical';
type EquationComponentProps = {
    equation: string;
    inline: boolean;
    nodeKey: NodeKey;
};
export default function EquationComponent({ equation, inline, nodeKey, }: EquationComponentProps): JSX.Element;
export {};
