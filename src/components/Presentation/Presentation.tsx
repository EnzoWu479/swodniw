import { Container, InfosContainer, ProfileImg } from './_presentation';

const Presentation = () => {
  return (
    <Container>
      <ProfileImg src="/assets/imgs/me.jpeg" alt="" />
      <InfosContainer>
        <h1>Olá, eu sou o Enzo</h1>
        <p>Sou um desenvolvedor front-end, com foco em ReactJS e Typescript.</p>
      </InfosContainer>
    </Container>
  );
};

export default Presentation;
