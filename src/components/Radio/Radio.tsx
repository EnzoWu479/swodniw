import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { Dot, Label, RadioArea } from './_radio';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const Radio = forwardRef(
  ({ label, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Label data-com="Label">
        <RadioArea>
          <input type="radio" {...rest} ref={ref} />
          <Dot />
        </RadioArea>
        {label}
      </Label>
    );
  },
);

export default Radio;
