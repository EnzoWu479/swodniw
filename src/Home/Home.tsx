import Image from 'next/image';
import { Container, RandomContainer } from './_home';
import Footer from '`@/components/Footer/Footer`';
import IconButton from '`@/components/IconButton/IconButton`';
import Presentation from '`@/components/Presentation/Presentation`';
import Love from '`@/components/Love/Love`';
import axios from 'axios';
import { useEffect } from 'react';
import { FiBox } from 'react-icons/fi';
import CreateWindow from '`@/components/CreateWindow/CreateWindow`';
import { FaReact } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import Technologies from '`@/components/Technologies/Technologies`';

const Home = () => {
  useEffect(() => {
    axios.get('https://api.github.com/repos/EnzoWu479/swodniw').then(res => {
      console.log(res.data);
    });
  }, []);

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
        icon={<img src="/assets/icons/person.svg" alt="" />}
        name="Quem sou eu"
        window={<Presentation />}
      />
      <IconButton
        icon={<FaReact />}
        name="Tecnologias"
        window={<Technologies />}
      />
      <IconButton
        icon={<BsGithub />}
        name="Repositório"
        onDoubleClick={() => {
          if (window !== undefined && window !== null) {
            window.open('https://github.com/EnzoWu479/swodniw', '_blank');
          }
        }}
      />
      {/* <IconButton
        icon={<img src="/assets/icons/love.svg" alt="" />}
        name="Amor para minha vida"
        window={<Love />}
      /><iframe width="560" height="315" src="https://www.youtube.com/embed/RifKmBOa52Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

      <Footer />
    </Container>
  );
};

export default Home;
