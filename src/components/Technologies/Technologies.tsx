import { FaReact } from 'react-icons/fa';
import { Container } from './_technologies';
import { SiDjango, SiNextdotjs, SiPython, SiTypescript } from 'react-icons/si';

const Technologies = () => {
  return (
    <Container>
      <SiNextdotjs title="Next.JS" />
      <FaReact title="React.JS" />
      <SiTypescript title="TypeScript" />
      <SiDjango title="Django" />
      <SiPython title="Python" />
    </Container>
  );
};

export default Technologies;
