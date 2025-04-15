/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { JSX } from 'react';
import { ComponentPickerOption } from '../plugins/picker/component-picker-option';
export declare function ComponentPickerMenuPlugin({ baseOptions, dynamicOptionsFn, }: {
    baseOptions?: Array<ComponentPickerOption>;
    dynamicOptionsFn?: ({ queryString }: {
        queryString: string;
    }) => Array<ComponentPickerOption>;
}): JSX.Element;
