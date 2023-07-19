declare module "*.mp3";

declare interface ModalProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  onClose?: () => void;
}
