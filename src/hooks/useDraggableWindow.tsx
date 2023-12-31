import DraggableWindow, {
  DraggableWindowProps,
} from '`@/components/DraggableWindow/DraggableWindow`';
import { IWindow } from '`@/types/interfaces`';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

interface draggableWindowProps {
  windows: windowIdProps[];
  minimizedWindowsId: number[];
  createWindow: (arg: IWindow) => void;
  focusWindow: (arg: number) => void;
  deleteWindow: (arg: number) => void;
  handleMinimizeWindow: (arg: number) => void;
}

export interface windowIdProps extends IWindow {
  id: number;
}
const draggableWindowContext = createContext<draggableWindowProps>(
  {} as draggableWindowProps,
);
const DraggableWindowProvider = ({ children }: ChildrenProps) => {
  const [windows, setWindows] = useState<windowIdProps[]>([]);
  const [minimizedWindowsId, setMinimizedWindowsId] = useState<number[]>([]);
  const [windowId, setWindowId] = useState<number>(0);

  const createWindow = (window: IWindow) => {
    const locatedWindow = windows.find(({ title }) => title === window.title);

    if (locatedWindow) {
      if (minimizedWindowsId.includes(locatedWindow.id)) {
        setMinimizedWindowsId(prev =>
          prev.filter(item => item !== locatedWindow.id),
        );
      }
      focusWindow(locatedWindow.id);
      return;
    }
    setWindows(prev => [...prev, { id: windowId, ...window }]);
    setWindowId(prev => prev + 1);
  };
  const handleMinimizeWindow = (id: number) => {
    setMinimizedWindowsId(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
    // focusWindow(id);
  };
  const focusWindow = (id: number) => {
    const newWindows = windows.filter(item => item.id !== id);
    const window = windows.find(item => item.id === id);
    if (!window) return;
    newWindows.push(windows.find(item => item.id === id) as windowIdProps);
    setWindows(newWindows);
  };
  const deleteWindow = (id: number) => {
    const newWindows = windows.filter(item => item.id !== id);
    setWindows(newWindows);
  };

  const memoValue = useMemo(
    () => ({
      createWindow,
      deleteWindow,
      focusWindow,
      handleMinimizeWindow,
      windows: [...windows],
      minimizedWindowsId,
    }),
    [createWindow, deleteWindow, focusWindow, windows],
  );
  return (
    <draggableWindowContext.Provider value={memoValue}>
      {children}
      <AnimatePresence>
        {windows.map((windowProps, index) => (
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
            onMouseDown={() => focusWindow(windowProps?.id)}
            key={windowProps?.id}
          >
            <DraggableWindow
              id={windowProps?.id}
              favicon={windowProps?.favicon}
              title={windowProps?.title}
              windowStyle={windowProps?.windowStyle}
            >
              {windowProps?.content}
            </DraggableWindow>
          </motion.div>
        ))}
      </AnimatePresence>
    </draggableWindowContext.Provider>
  );
};

export default DraggableWindowProvider;
export const useDraggableWindow = () => useContext(draggableWindowContext);
