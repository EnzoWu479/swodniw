import Image from 'next/image';
import { Container, RandomContainer } from './_home';
import Footer from '`@/components/Footer/Footer`';
import IconButton from '`@/components/IconButton/IconButton`';
import Presentation from '`@/components/Presentation/Presentation`';
import Love from '`@/components/Love/Love`';

const Home = () => {
  return (
    <Container>
      <Image
        src="/assets/imgs/wallpaper.webp"
        fill
        alt="wallpaper"
        id="wallpaper"
      />
      <IconButton
        icon={<img src="/assets/icons/folder.svg" alt="" />}
        name="Pastas"
        window={<RandomContainer>olaa</RandomContainer>}
      />
      <IconButton
        icon={<img src="/assets/icons/navigator.svg" alt="" />}
        name="Navegador"
        window={<RandomContainer>olaa</RandomContainer>}
      />
      <IconButton
        icon={<img src="/assets/icons/person.svg" alt="" />}
        name="Quem sou eu"
        window={<Presentation />}
      />
      <IconButton
        icon={<img src="/assets/icons/person.svg" alt="" />}
        name="Dudu202"
        window={<Presentation />}
      />
      {/* <IconButton
        icon={<img src="/assets/icons/love.svg" alt="" />}
        name="Amor para minha vida"
        window={<Love />}
      /> */}

      <Footer />
    </Container>
  );
};

export default Home;
