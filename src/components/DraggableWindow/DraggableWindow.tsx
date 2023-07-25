import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { PiMinus } from 'react-icons/pi';
import {
  ButtonClose,
  Content,
  Favicon,
  WindowButtons,
  WindowHeader,
  WindowTitle,
  WindowWrapper,
} from './_draggablewindow';
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { useDraggableWindow } from '`@/hooks/useDraggableWindow`';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';
export interface DraggableWindowProps {
  initialPosition?: {
    x: number;
    y: number;
  };
  initialSize?: {
    width: number;
    height: number;
  };
}
interface Props extends DraggableWindowProps {
  children: React.ReactNode;
  id: number;
  style?: CSSProperties;
  windowStyle?: CSSProperties;
  title?: string;
  favicon?: JSX.Element;
}
const DraggableWindow = ({
  initialPosition,
  initialSize,
  style,
  id,
  title,
  children,
  favicon,
  windowStyle,
}: Props) => {
  const { deleteWindow, minimizedWindowsId, handleMinimizeWindow } =
    useDraggableWindow();
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const widthPx = window.innerWidth * 0.8;
  const heightPx = window.innerHeight * 0.8;

  const ref = useRef<HTMLDivElement>(null);
  const isInFullScreen = () => {
    if (ref.current) {
      const { innerHeight, innerWidth } = window;
      const { top, left, width, height } = ref.current.style;
      return (
        top === '0px' &&
        left === '0px' &&
        width === `${innerWidth}px` &&
        height === `${innerHeight}px`
      );
    }
    return false;
  };

  const dragMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const timerManager = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      if (ref.current) {
        ref.current.style.transition = 'opacity ease 0.2s';
      }
    }, 200);
  };

  const elementDrag = (e: MouseEvent) => {
    e.preventDefault();
    if (ref.current) {
      const { offsetTop, offsetLeft } = ref.current;
      const { width, height } = ref.current.style;
      // ref.current.style.transition = 'none';
      if (isInFullScreen()) {
        ref.current.style.top = '0';
        ref.current.style.left = '10%';

        ref.current.style.width = `${widthPx}px`;
        ref.current.style.height = `${heightPx}px`;
        setIsFullScreen(false);
        return;
      }
      let x = offsetLeft + e.movementX;
      let y = offsetTop + e.movementY;
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }

      let currentWidth = parseInt(width) || 400;

      if (x > window.innerWidth - (parseInt(width) || 400)) {
        x = window.innerWidth - (parseInt(width) || 400);
      }
      if (y > window.innerHeight - (parseInt(height) || 400) - 48) {
        y = window.innerHeight - (parseInt(height) || 400) - 48;
      }

      ref.current.style.top = `${y}px`;
      ref.current.style.left = `${x}px`;
    }
  };
  const onDragEnd = () => {
    if (ref.current) {
      const { offsetTop, offsetLeft } = ref.current;
      const { width, height } = ref.current.style;
      // console.log(ref);
    }
  };
  const handleFullScreen = () => {
    timerManager();
    if (ref.current) {
      const { innerHeight, innerWidth } = window;
      ref.current.style.transition = 'all 0.2s ease-in-out';
      ref.current.style.top = '0px';
      ref.current.style.left = '0px';
      ref.current.style.width = `${innerWidth}px`;
      ref.current.style.height = `${innerHeight}px`;
    }
    setIsFullScreen(true);
  };
  const handleMinimize = () => {
    timerManager();
    if (ref.current) {
      ref.current.style.transition = 'all 0.2s ease-in-out';
      ref.current.style.width = `${window.innerWidth * 0.8}px`;
      ref.current.style.height = `${window.innerHeight * 0.8}px`;
      ref.current.style.top = `10%`;
      ref.current.style.left = `10%`;
    }
    setIsFullScreen(false);
  };
  const onHeaderDoubleClick = () => {
    if (ref.current) {
      if (isInFullScreen()) {
        handleMinimize();
      } else {
        handleFullScreen();
      }
    }
  };

  const closeDragElement = () => {
    if (ref.current) {
      // ref.current.style.transition = 'all 0.3s ease-in-out';
      if (ref.current.style.top === '0px') {
        handleFullScreen();
      }
    }

    document.onmouseup = null;
    document.onmousemove = null;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.top = `${initialPosition?.y || 10}px`;
      ref.current.style.left = `${initialPosition?.x || 10}px`;
    }
  }, []);

  return (
    <AnimatePresence>
      <WindowWrapper
        style={style}
        ref={ref}
        minimized={minimizedWindowsId.includes(id)}
      >
        <WindowHeader onDoubleClick={onHeaderDoubleClick}>
          <WindowTitle onMouseDown={dragMouseDown} onMouseUp={onDragEnd}>
            {!!favicon && <Favicon>{favicon}</Favicon>}
            {title ?? 'Window'}
          </WindowTitle>
          <WindowButtons>
            <ButtonClose type="button" onClick={() => handleMinimizeWindow(id)}>
              <PiMinus />
            </ButtonClose>
            <ButtonClose
              type="button"
              onClick={() => {
                if (isFullScreen) {
                  handleMinimize();
                } else {
                  handleFullScreen();
                }
              }}
            >
              {isFullScreen ? <FiMinimize2 /> : <FiMaximize2 />}
            </ButtonClose>
            <ButtonClose type="button" onClick={() => deleteWindow(id)}>
              <CgClose />
            </ButtonClose>
          </WindowButtons>
        </WindowHeader>
        <Content style={windowStyle}>{children}</Content>
      </WindowWrapper>
    </AnimatePresence>
  );
};

export default DraggableWindow;
