import { css, styled } from 'styled-components';

export const LabelText = styled.span`
  position: absolute;
  font-size: 0.85rem;

  color: #4e4e4e;
  background-color: #131212;

  padding: 0 5px;

  border-radius: 5px;

  top: 50%;
  left: 10px;

  transform: translateY(-50%);
  width: max-content;
  box-sizing: border-box;

  transition: all ease 0.2s;
  pointer-events: none;
`;
interface InputProps {
  error?: boolean;
}
export const Input = styled.input<InputProps>`
  border: 1px solid #1c1c1c;
  border-radius: 5px;

  height: 36px;
  width: 100%;
  padding: 0 10px;

  background-color: transparent;
  color: #fff;

  box-sizing: border-box;

  font-size: 0.85rem;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: transparent;
  }
`;
export const Label = styled.label`
  position: relative;
  margin-top: 14px;

  display: flex;
  flex-direction: column;

  ${Input}:focus + ${LabelText}, 
  ${Input}:not(:placeholder-shown) + ${LabelText} {
    transform: translateY(-190%) scale(1.05);
    color: #d6d6d6;
  }
`;
export const NormalVariantLabel = styled.label`
  display: flex;
  flex-direction: column;
  
  gap: 5px;
`;
export const NormalVariantInput = styled.input<InputProps>`
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  height: 36px;
  width: 100%;
  padding: 0 10px;
  font-size: 0.75rem;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  border-radius: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.formBorder};
  }
  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
    `}
`;
export const NormalVariantLabelText = styled.span`
  font-size: 0.85rem;
  padding-left: 8px;
  margin-top: 14px; 
`;
