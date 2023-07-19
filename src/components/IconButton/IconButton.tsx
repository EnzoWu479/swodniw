import { useDraggableWindow } from '`@/hooks/useDraggableWindow`';
import { Button, IconName } from './_iconbutton';
import { useRef } from 'react';

interface IconButtonProps {
  icon: JSX.Element;
  name: string;
  window?: JSX.Element;
}
const IconButton = ({ icon, name, window }: IconButtonProps) => {
  const { createWindow } = useDraggableWindow();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleDoubleClick = () => {
    if (window) {
      createWindow(window, name);
      if (buttonRef.current) buttonRef.current.blur();
    }
  };

  return (
    <Button draggable onDoubleClick={handleDoubleClick} ref={buttonRef}>
      {icon}
      <IconName>{name}</IconName>
    </Button>
  );
};

export default IconButton;
