import { styled } from 'styled-components';

export const Dot = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 60%;
  height: 60%;

  border-radius: 50%;
  opacity: 0;

  transition: all ease 0.2s;
  transform: scale(0);
`;
export const RadioArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  input {
    display: none;
  }
  input:checked + ${Dot} {
    opacity: 1;
    transform: scale(1);
  }
  width: 25px;
  height: 25px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.formBorder};
`;
export const Label = styled.label`
  color: ${({theme}) => theme.colors.text};

  display: flex;
  align-items: center;

  gap: 10px;
  font-size: 0.875rem;

  width: fit-content;
`;