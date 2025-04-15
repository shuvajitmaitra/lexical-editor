import { ComponentPickerOption } from "../../plugins/picker/component-picker-option";
export declare function TablePickerPlugin(): ComponentPickerOption;
export declare function DynamicTablePickerPlugin({ queryString }: {
    queryString: string;
}): ComponentPickerOption[];
