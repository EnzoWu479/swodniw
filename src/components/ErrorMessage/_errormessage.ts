import { styled } from 'styled-components';

interface ErrorProps {
  error?: string;
}
export const Error = styled.span<ErrorProps>`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.75rem !important;

  margin-top: ${({ error }) => (error ? '2px' : '0')};
  opacity: ${({ error }) => (error ? '1' : '0')};
  height: ${({ error }) => (error ? '0.75rem' : '0')};

  transform: ${({ error }) => (!!error ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;

  transition: all ease 0.2s;
`;
