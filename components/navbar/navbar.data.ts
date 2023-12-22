import { Routes, RoutesEnum } from '@/constants/routes';

export const MENU_ITEMS = [
  {
    name: 'Features',
    path: '#features',
  },
  {
    name: 'Proven',
    path: '#proven',
  },
  {
    name: 'How it works',
    path: '#how-it-works',
  },
  {
    name: 'Documentation',
    path: Routes[RoutesEnum.Docs],
  },
];
