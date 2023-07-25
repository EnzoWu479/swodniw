import { useDraggableWindow } from '`@/hooks/useDraggableWindow`';
import { Button, IconContainer, IconName } from './_iconbutton';
import { CSSProperties, useRef, useState } from 'react';

interface IconButtonProps {
  icon: JSX.Element;
  name: string;
  window?: JSX.Element;
  windowStyle?: CSSProperties;
  onDoubleClick?: () => void;
}
const IconButton = ({
  icon,
  name,
  onDoubleClick,
  window,
  windowStyle,
}: IconButtonProps) => {
  const { createWindow } = useDraggableWindow();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleDoubleClick = () => {
    if (onDoubleClick) onDoubleClick();
    if (window) {
      createWindow({
        content: window,
        type: 'window',
        title: name,
        favicon: icon,
        windowStyle,
      });
      onBlur();
    }
  };
  const handleClick = () => {
    if (buttonRef.current) {
      if (isFocused) {
        handleDoubleClick();
        setIsFocused(false);
      } else {
        setIsFocused(true);
      }
    }
  };
  const onBlur = () => {
    if (buttonRef.current) {
      buttonRef.current.blur();
      if (isFocused) {
        setIsFocused(false);
      }
    }
  };

  return (
    <Button
      draggable
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onBlur={() => setIsFocused(false)}
      ref={buttonRef}
    >
      <IconContainer>{icon}</IconContainer>
      <IconName>{name}</IconName>
    </Button>
  );
};

export default IconButton;
