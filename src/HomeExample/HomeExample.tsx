import { ComponentExample } from '`@/components/ComponentExample/Component`';
import { ContainerExample, PageTitle } from './_homeExample';
import { useState } from 'react';
import NormalWindow from '`@/components/NormalWindow/NormalWindow`';
import { useDraggableWindow } from '`@/hooks/useDraggableWindow`';

interface IHomeExample {
  pageTitle: string;
}

export const HomeExample = ({ pageTitle }: IHomeExample) => {
  const { createWindow } = useDraggableWindow();
  return (
    <ContainerExample data-com="ContainerExample">
      <PageTitle data-com="PageTitle">{pageTitle}</PageTitle>
      <button onClick={() => createWindow(<div>1</div>)}>adicionar</button>
      <ComponentExample />
    </ContainerExample>
  );
};
