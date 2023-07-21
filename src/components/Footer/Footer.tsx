import { useDraggableWindow } from '`@/hooks/useDraggableWindow`';
import { FooterContainer, HomeButton, WindowButton } from './_footer';

const Footer = () => {
  const { windows, minimizedWindowsId, handleMinimizeWindow } =
    useDraggableWindow();
  return (
    <FooterContainer>
      <HomeButton type="button">
        <img src="/assets/imgs/logo.png" alt="" />
      </HomeButton>
      {windows
        .sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        })
        .reverse()
        .map(({ id, title, favicon }, index) => (
          <WindowButton
            title={title}
            key={id}
            onClick={() => handleMinimizeWindow(id)}
            inShow={!minimizedWindowsId.includes(id)}
          >
            {favicon}
          </WindowButton>
        ))}
    </FooterContainer>
  );
};

export default Footer;
