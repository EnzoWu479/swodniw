import DraggableWindow, {
  DraggableWindowProps,
} from '`@/components/DraggableWindow/DraggableWindow`';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

interface draggableWindowProps {
  createWindow: (arg: JSX.Element, name?: string) => void;
  focusWindow: (arg: number) => void;
  deleteWindow: (arg: number) => void;
}
interface windowProps {
  content: ReactNode;
  title?: string;
  favicon?: JSX.Element;
}
interface windowIdProps extends windowProps {
  id: number;
}
const draggableWindowContext = createContext<draggableWindowProps>(
  {} as draggableWindowProps,
);
const DraggableWindowProvider = ({ children }: ChildrenProps) => {
  const [windows, setWindows] = useState<windowIdProps[]>([]);
  const [windowId, setWindowId] = useState<number>(0);

  const createWindow = (window: JSX.Element, title?: string) => {
    setWindows(prev => [
      ...prev,
      { id: windowId, content: window, title: title },
    ]);
    setWindowId(prev => prev + 1);
  };
  const focusWindow = (index: number) => {
    const newWindows = windows.filter((_, i) => i !== index);
    newWindows.push(windows[index]);
    setWindows(newWindows);
  };
  const deleteWindow = (id: number) => {
    const newWindows = windows.filter(item => item.id !== id);
    setWindows(newWindows);
  };

  const memoValue = useMemo(
    () => ({ createWindow, deleteWindow, focusWindow }),
    [createWindow],
  );
  return (
    <draggableWindowContext.Provider value={memoValue}>
      {children}
      <AnimatePresence>
        {windows.map(({ content, id, title }, index) => (
          <motion.div
            initial={{
              opacity: 0,
              // scale: 0.5,
            }}
            animate={{
              opacity: 1,
              // scale: 1,
            }}
            exit={{
              opacity: 0,
              // scale: 0.5,
            }}
            onMouseDown={() => focusWindow(index)}
            key={id}
          >
            <DraggableWindow id={id} title={title}>
              {content}
            </DraggableWindow>
          </motion.div>
        ))}
      </AnimatePresence>
    </draggableWindowContext.Provider>
  );
};

export default DraggableWindowProvider;
export const useDraggableWindow = () => useContext(draggableWindowContext);
