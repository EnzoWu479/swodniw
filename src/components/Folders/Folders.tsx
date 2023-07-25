import { IFolder } from '`@/types/interfaces`';
import { Container, ImageIcon } from './_folders';
import IconButton from '../IconButton/IconButton';
import { BsFolderFill } from 'react-icons/bs';
import { FiBox } from 'react-icons/fi';
import ImageWindow from '../ImageWindow/ImageWindow';

const Folders = ({ title, id, children }: IFolder) => {
  return (
    <Container>
      {children &&
        children.map((child, index) => {
          const getIcon = () => {
            switch (child.type) {
              case 'folder':
                return <BsFolderFill />;
              case 'file':
                return <FiBox />;
              case 'image':
                return <ImageIcon src={child.src} />;
              default:
                return <FiBox />;
            }
          };
          const getContent = () => {
            switch (child.type) {
              case 'folder':
                return <Folders {...child} />;
              case 'file':
                return <div>File</div>;
              case 'image':
                return <ImageWindow src={child.src} title={child.title} />;
              default:
                return <div>File</div>;
            }
          };

          return (
            <IconButton
              icon={getIcon()}
              name={child?.title || ''}
              window={getContent()}
              windowStyle={
                child.type === 'folder'
                  ? {
                      backgroundColor: '#0005',
                      backdropFilter: 'blur(5px)',
                    }
                  : undefined
              }
            />
          );
        })}
    </Container>
  );
};

export default Folders;
