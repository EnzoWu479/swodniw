export interface IUser {
  id: number;
}
export interface IFolder {
  id?: number;
  name: string;
  children?: (IFile | IWindow | IFolder)[];
}
export interface IFile {
  favicon?: JSX.Element;
  title: string;
  href?: string;
}
export interface IWindow {
  content: JSX.Element;
  title?: string;
  favicon?: JSX.Element;
}
