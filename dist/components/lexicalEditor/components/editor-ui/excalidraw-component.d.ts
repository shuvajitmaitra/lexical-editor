import { JSX } from 'react';
import type { NodeKey } from 'lexical';
export default function ExcalidrawComponent({ nodeKey, data, width, height, }: {
    data: string;
    nodeKey: NodeKey;
    width: 'inherit' | number;
    height: 'inherit' | number;
}): JSX.Element;
