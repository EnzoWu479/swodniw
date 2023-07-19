import Image from 'next/image';
import { Container, RandomContainer } from './_home';
import Footer from '`@/components/Footer/Footer`';
import IconButton from '`@/components/IconButton/IconButton`';

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
      <Footer />
    </Container>
  );
};

export default Home;
