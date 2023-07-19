import {
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import {
  Input,
  Label,
  LabelText,
  NormalVariantInput,
  NormalVariantLabel,
  NormalVariantLabelText,
} from './_inputtext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'float' | 'normal';
}

const InputText = forwardRef(
  (
    { label, error, variant = 'normal', ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div>
        {
          {
            float: (
              <Label>
                <Input {...rest} ref={ref} placeholder="." />
                <LabelText>{label}</LabelText>
              </Label>
            ),
            normal: (
              <NormalVariantLabel data-com="NormalVariantLabel">
                {label ? (
                  <NormalVariantLabelText data-com="NormalVariantLabelText">
                    {label}
                  </NormalVariantLabelText>
                ) : null}
                <NormalVariantInput
                  data-com="NormalVariantInput"
                  error={!!error}
                  {...rest}
                  ref={ref}
                />
              </NormalVariantLabel>
            ),
          }[variant]
        }
        <ErrorMessage error={error} />
      </div>
    );
  },
);
export default InputText;
