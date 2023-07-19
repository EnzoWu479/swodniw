import { styled } from 'styled-components';

export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Label = styled.label`
  input[type='checkbox'] {
    display: none;
  }
  border: 1px solid ${({ theme }) => theme.colors.primary};


  display: block;
  
  width: fit-content;
  height: 18px;

  border-radius: 3px;

  cursor: pointer;

  #check {
    opacity: 0;

    transition: opacity ease 0.2s;
  }
  input[type='checkbox']:checked + #check {
    opacity: 1;
  }
`;
export const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;
