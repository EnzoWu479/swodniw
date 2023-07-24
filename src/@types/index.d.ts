declare module "*.mp3";

declare interface ChildrenProps {
  children: ReactNode;
}

declare interface ModalProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  onClose?: () => void;
}
