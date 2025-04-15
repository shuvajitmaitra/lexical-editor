import { JSX } from 'react';
import { NodeKey } from 'lexical';
import type { Options } from '../nodes/poll-node';
export default function PollComponent({ question, options, nodeKey, }: {
    nodeKey: NodeKey;
    options: Options;
    question: string;
}): JSX.Element;
