import Link from 'next/link';
import { ChildExample, ContainerExample } from './_componentExample';

export const ComponentExample = () => {
  return (
    <ContainerExample data-com="ContainerExample">
      <ChildExample data-com="ChildExample">
        Esse é um exemplo de componente
      </ChildExample>

      <Link href="/page-example">Link de navegação</Link>
    </ContainerExample>
  );
};
