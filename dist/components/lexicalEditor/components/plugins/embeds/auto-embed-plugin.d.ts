/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { JSX } from 'react';
import { EmbedConfig } from '@lexical/react/LexicalAutoEmbedPlugin';
export interface CustomEmbedConfig extends EmbedConfig {
    contentName: string;
    icon?: JSX.Element;
    exampleUrl: string;
    keywords: Array<string>;
    description?: string;
}
export declare const YoutubeEmbedConfig: CustomEmbedConfig;
export declare const TwitterEmbedConfig: CustomEmbedConfig;
export declare const FigmaEmbedConfig: CustomEmbedConfig;
export declare const EmbedConfigs: CustomEmbedConfig[];
export declare function AutoEmbedDialog({ embedConfig, onClose, }: {
    embedConfig: CustomEmbedConfig;
    onClose: () => void;
}): JSX.Element;
export declare function AutoEmbedPlugin(): JSX.Element;
