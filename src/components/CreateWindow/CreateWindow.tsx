import { useForm } from 'react-hook-form';
import { Container, FormContainer, Title } from './_createwindow';
import InputText from '../InputText/InputText';

const CreateWindow = () => {
  const { control } = useForm();
  return (
    <Container>
      <Title>Crie sua janela</Title>
      <FormContainer control={control}>
        <InputText label="Nome da tela" />
        <InputText label="Nome da tela" />
      </FormContainer>
    </Container>
  );
};

export default CreateWindow;
