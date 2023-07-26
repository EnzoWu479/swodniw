import { styled } from 'styled-components';
import WindowContainer from '../WindowContainer/WindowContainer';

export const Container = styled(WindowContainer).attrs({'data-com': 'Container'})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  color: #fff;
  font-size: 3rem;

`;
