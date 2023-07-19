import DraggableWindow, {
  DraggableWindowProps,
} from '../DraggableWindow/DraggableWindow';

interface Props extends DraggableWindowProps {
  title: string;
}

const NormalWindow = ({ title, ...rest }: Props) => {
  return (
    <DraggableWindow {...rest}>
      <h1>{title}</h1>
    </DraggableWindow>
  );
};

export default NormalWindow;
