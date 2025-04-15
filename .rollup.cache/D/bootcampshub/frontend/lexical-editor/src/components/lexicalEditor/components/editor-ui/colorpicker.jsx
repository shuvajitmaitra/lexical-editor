import { __rest } from "tslib";
import * as React from 'react';
import { HexColorPicker } from 'react-colorful';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Popover, PopoverContent, PopoverTrigger, } from '../../ui/popover';
export default function ColorPicker(_a) {
    var { disabled = false, stopCloseOnClickSelf = true, color, onChange, icon, label } = _a, rest = __rest(_a, ["disabled", "stopCloseOnClickSelf", "color", "onChange", "icon", "label"]);
    return (<Popover modal={true}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button size={'sm'} variant={'outline'} className="h-8 w-8" {...rest}>
          <span className="size-4 rounded-full">{icon}</span>
          {/* <ChevronDownIcon className='size-4'/> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <HexColorPicker color={color} onChange={(color) => onChange === null || onChange === void 0 ? void 0 : onChange(color, false)}/>
        <Input maxLength={7} onChange={(e) => {
            var _a;
            e.stopPropagation();
            onChange === null || onChange === void 0 ? void 0 : onChange((_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.value, false);
        }} value={color}/>
      </PopoverContent>
    </Popover>);
}
//# sourceMappingURL=colorpicker.jsx.map