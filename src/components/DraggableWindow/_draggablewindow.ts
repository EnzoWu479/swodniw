import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const WindowWrapper = styled.div.attrs({
  'data-com': 'WindowWrapper',
})`
  position: absolute;
  resize: both;
  overflow: auto;
  height: 400px;
  width: 400px;

  /* transition: all 0.2s ease-in-out; */
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
  cursor: pointer;
`;
export const WindowButtons = styled.div.attrs({
  'data-com': 'WindowButtons',
})``;
export const Content = styled.div.attrs({ 'data-com': 'content' })`
  background-color: #fff;
  width: 100%;
  height: calc(100% - 2rem);
  border: 1px solid #333;
`;
export const ButtonClose = styled.button.attrs({ 'data-com': 'ButtonClose' })`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
