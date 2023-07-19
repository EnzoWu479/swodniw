import Image from 'next/image';
import { styled } from 'styled-components';

export const Container = styled.main.attrs({ 'data-com': 'Container' })`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  padding-bottom: 3rem;

  display: flex;
  flex-wrap: wrap;

  #wallpaper {
    pointer-events: none;
    object-fit: cover;
    z-index: -1;
  }
`;
export const RandomContainer = styled.div.attrs({
  'data-com': 'RandomContainer',
})`
  background-color: red;
`;
