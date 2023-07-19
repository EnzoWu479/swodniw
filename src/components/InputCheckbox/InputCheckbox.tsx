import {
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { Label, LabelContainer, LabelText } from './_inputcheckbox';
import Image from 'next/image';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const InputCheckbox = forwardRef(
  ({ label, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <LabelContainer>
        <Label>
          <input {...rest} type="checkbox" ref={ref} />
          <Image
            src="/assets/icons/check.svg"
            alt="checkbox"
            id="check"
            width={18}
            height={18}
          ></Image>
        </Label>
        <LabelText>{label}</LabelText>
      </LabelContainer>
    );
  },
);
export default InputCheckbox;
