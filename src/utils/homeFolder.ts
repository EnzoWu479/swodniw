import { IFolder } from '`@/types/interfaces`';

const homeFolder: IFolder = {
  id: 1,
  title: 'Home',
  type: 'folder',
  children: [
    {
      id: 2,
      title: 'Certificados',
      type: 'folder',
      children: [
        {
          type: 'image',
          src: '/assets/imgs/certificate1.png',
          title: 'POO',
        },
        {
          type: 'image',
          src: '/assets/imgs/certificate2.png',
          title: 'Front-end Capstone',
        },
        {
          type: 'image',
          src: '/assets/imgs/certificate3.png',
          title: 'Meta Front-end Developer',
        },
        {
          type: 'image',
          src: '/assets/imgs/certificate4.jpg',
          title: 'Meta React-native',
        },
      ],
    },
    {
      id: 3,
      title: 'Eu',
      type: 'folder',
      children: [
        {
          type: 'image',
          src: '/assets/imgs/me.jpeg',
          title: 'Eu',
        },
        {
          type: 'image',
          src: '/assets/imgs/me1.jpeg',
          title: 'Eu2',
        },
      ],
    },
    {
      id: 4,
      title: 'Duda',
      type: 'folder',
      children: [
        {
          type: 'image',
          src: '/assets/imgs/gf.jpg',
          title: 'Duda1',
        },
        {
          type: 'image',
          src: '/assets/imgs/gf1.jpg',
          title: 'Duda2',
        },
        {
          type: 'image',
          src: '/assets/imgs/gf2.jpg',
          title: 'Duda3',
        },
      ],
    },
  ],
};
export default homeFolder;
