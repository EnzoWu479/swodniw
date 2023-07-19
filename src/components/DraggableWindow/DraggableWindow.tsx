import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import {
  ButtonClose,
  Content,
  WindowButtons,
  WindowHeader,
  WindowTitle,
  WindowWrapper,
} from './_draggablewindow';
import { use, useEffect, useRef, useState } from 'react';
import { useDraggableWindow } from '`@/hooks/useDraggableWindow`';
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
  style?: React.CSSProperties;
  title?: string;
}
const DraggableWindow = ({
  initialPosition,
  initialSize,
  style,
  id,
  title,
  children,
}: Props) => {
  const { deleteWindow } = useDraggableWindow();
  const [size, setSize] = useState(initialSize || { width: 400, height: 400 });

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
  const isOnTop = () => {
    if (ref.current) {
      const { offsetTop } = ref.current;
      return offsetTop === 0;
    }
    return false;
  };

  const dragMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e: MouseEvent) => {
    e.preventDefault();
    if (ref.current) {
      const { offsetTop, offsetLeft } = ref.current;
      const { width, height } = ref.current.style;
      ref.current.style.transition = 'none';
      if (isInFullScreen()) {
        ref.current.style.width = `${80}%`;
        ref.current.style.height = `${80}%`;
        // return;
      }
      if (offsetTop + e.movementY < 0) {
        ref.current.style.top = '0px';
        // handleFullScreen();
        ref.current.blur();
        return;
      }
      if (offsetLeft + e.movementX < 0) {
        ref.current.blur();
        return;
      }
      if (offsetTop + e.movementY + parseInt(height) > window.innerHeight) {
        return;
      }
      ref.current.style.top = `${offsetTop + e.movementY}px`;
      ref.current.style.left = `${offsetLeft + e.movementX}px`;
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
    if (ref.current) {
      const { innerHeight, innerWidth } = window;
      ref.current.style.top = '0px';
      ref.current.style.left = '0px';
      ref.current.style.width = `${innerWidth}px`;
      ref.current.style.height = `${innerHeight}px`;
    }
  };
  const handleMinimize = () => {
    if (ref.current) {
      ref.current.style.width = `80%`;
      ref.current.style.height = `80%`;
      ref.current.style.top = `10%`;
      ref.current.style.left = `10%`;
    }
  };
  const onHeaderDoubleClick = () => {
    if (isInFullScreen()) {
      handleMinimize();
    } else {
      handleFullScreen();
    }
  };

  const closeDragElement = () => {
    if (ref.current) {
      ref.current.style.transition = 'all 0.3s ease-in-out';
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
      <WindowWrapper style={style} ref={ref}>
        <WindowHeader onDoubleClick={onHeaderDoubleClick}>
          <WindowTitle onMouseDown={dragMouseDown} onMouseUp={onDragEnd}>
            {title ?? 'Window'}
          </WindowTitle>
          <WindowButtons>
            <ButtonClose type="button" onClick={() => deleteWindow(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.402"
                height="17.398"
                viewBox="2.885 3.301 17.402 17.398"
              >
                <path
                  d="m13.648 12 6.215-6.215a1.463 1.463 0 0 0 0-2.06 1.463 1.463 0 0 0-2.06 0l-6.215 6.216-6.215-6.216a1.457 1.457 0 0 0-2.488 1.03c0 .374.146.747.428 1.03L9.53 12l-6.216 6.216a1.457 1.457 0 0 0-.428 1.03 1.457 1.457 0 0 0 2.488 1.03l6.215-6.216 6.216 6.215a1.463 1.463 0 0 0 2.06 0 1.463 1.463 0 0 0 0-2.06L13.647 12Z"
                  fill="#d6d6d6"
                  fill-rule="evenodd"
                  data-name="Icon ionic-ios-close"
                />
              </svg>
            </ButtonClose>
          </WindowButtons>
        </WindowHeader>
        <Content>{children}</Content>
      </WindowWrapper>
    </AnimatePresence>
  );
};

export default DraggableWindow;
