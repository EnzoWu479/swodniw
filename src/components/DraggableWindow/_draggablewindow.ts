import { motion } from 'framer-motion';
import { css, styled } from 'styled-components';

interface WindowWrapperProps {
  minimized: boolean;
}
export const WindowWrapper = styled.div.attrs({
  'data-com': 'WindowWrapper',
})<WindowWrapperProps>`
  position: absolute;
  resize: both;
  overflow: auto;
  height: 400px;
  width: 400px;
  min-width: 200px;
  min-height: 200px;

  ${({ minimized }) =>
    minimized &&
    css`
      opacity: 0;
      pointer-events: none;
    `}/* transition: all 0.2s ease-in-out; */
`;
export const WindowHeader = styled.div.attrs({ 'data-com': 'WindowHeader' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  height: 2rem;
  background-color: #333;
`;
export const WindowTitle = styled.div.attrs({ 'data-com': 'WindowTitle' })`
  width: 100%;
  height: 100%;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;
`;
export const WindowButtons = styled.div.attrs({
  'data-com': 'WindowButtons',
})`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const Content = styled.div.attrs({ 'data-com': 'content' })`
  background-color: #fff;
  width: 100%;
  height: calc(100% - 2rem);
  border: 1px solid #333;
  overflow: auto;
`;
export const ButtonClose = styled.button.attrs({ 'data-com': 'ButtonClose' })`
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 1.3rem;
`;
export const Favicon = styled.div.attrs({ 'data-com': 'Favicon' })`
  height: 80%;

  img {
    height: 100%;
  }
`;
