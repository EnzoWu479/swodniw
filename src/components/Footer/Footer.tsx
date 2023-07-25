import { useDraggableWindow } from '`@/hooks/useDraggableWindow`';
import {
  DateField,
  FooterContainer,
  HomeButton,
  Time,
  TimeContainer,
  WindowButton,
} from './_footer';
import { useEffect, useState } from 'react';
import dateFormat from '`@/utils/formaters/dateFormat`';
import Menu from '../Menu/Menu';

const Footer = () => {
  const [time, setTime] = useState(new Date().toISOString());
  const { windows, minimizedWindowsId, handleMinimizeWindow } =
    useDraggableWindow();
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toISOString());
    }, 60000);
  }, []);
  return (
    <FooterContainer>
      <Menu />
      {windows
        .sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        })
        .reverse()
        .map((windowProps, index) => (
          <WindowButton
            title={windowProps?.title}
            key={windowProps?.id}
            onClick={() => handleMinimizeWindow(windowProps?.id)}
            inShow={!minimizedWindowsId.includes(windowProps?.id)}
          >
            {windowProps?.favicon}
          </WindowButton>
        ))}
      <TimeContainer>
        <Time>{dateFormat(time, 'HH:mm')}</Time>
        <DateField>{dateFormat(time)}</DateField>
      </TimeContainer>
    </FooterContainer>
  );
};

export default Footer;
