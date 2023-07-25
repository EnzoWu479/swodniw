import { CSSProperties } from 'react';

export interface IUser {
  id: number;
}
export interface IFolder {
  id?: number;
  title: string;
  type: 'folder';
  children?: (IFile | IWindow | IFolder | IImage)[];
}
export interface IFile {
  type: 'file';
  favicon?: JSX.Element;
  title: string;
  href?: string;
}
export interface IWindow {
  type: 'window';
  content: JSX.Element;
  title?: string;
  favicon?: JSX.Element;
  windowStyle?: CSSProperties;
}
export interface IImage {
  type: 'image';
  src: string;
  title?: string;
}
