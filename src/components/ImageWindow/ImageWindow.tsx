import { Container, Image } from './_imagewindow';

interface ImageWindowProps {
  src: string;
  title?: string;
}
const ImageWindow = ({ src, title }: ImageWindowProps) => {
  return (
    <Container>
      <Image src={src} alt={title} />
    </Container>
  );
};

export default ImageWindow;
