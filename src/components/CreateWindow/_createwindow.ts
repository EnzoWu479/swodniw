import { styled } from 'styled-components';
import WindowContainer from '../WindowContainer/WindowContainer';
import { Form } from 'react-hook-form';

export const Container = styled(WindowContainer).attrs({
  'data-com': 'Container',
})`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;
export const Title = styled.h1.attrs({ 'data-com': 'Title' })`
  font-size: 1.5rem;
  font-weight: 700;
  color: #020202;
`;
export const FormContainer = styled(Form).attrs({
  'data-com': 'FormContainer',
})``;
