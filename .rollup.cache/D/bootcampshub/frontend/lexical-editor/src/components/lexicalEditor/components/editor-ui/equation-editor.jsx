import * as React from 'react';
import { forwardRef } from 'react';
function EquationEditor({ equation, setEquation, inline }, forwardedRef) {
    const onChange = (event) => {
        setEquation(event.target.value);
    };
    return inline && forwardedRef instanceof HTMLInputElement ? (<span className="EquationEditor_inputBackground bg-background">
      <span className="EquationEditor_dollarSign text-left text-muted-foreground">
        $
      </span>
      <input className="EquationEditor_inlineEditor m-0 resize-none border-0 bg-inherit p-0 text-primary outline-none" value={equation} onChange={onChange} autoFocus={true} ref={forwardedRef}/>
      <span className="EquationEditor_dollarSign text-left text-muted-foreground">
        $
      </span>
    </span>) : (<div className="EquationEditor_inputBackground bg-background">
      <span className="EquationEditor_dollarSign text-left text-muted-foreground">
        {'$$\n'}
      </span>
      <textarea className="EquationEditor_blockEditor m-0 w-full resize-none border-0 bg-inherit p-0 text-primary outline-none" value={equation} onChange={onChange} ref={forwardedRef}/>
      <span className="EquationEditor_dollarSign text-left text-muted-foreground">
        {'\n$$'}
      </span>
    </div>);
}
export default forwardRef(EquationEditor);
//# sourceMappingURL=equation-editor.jsx.map