export enum RoutesEnum {
  Home = 'home',
  Docs = 'docs',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Home]: '/',
  [RoutesEnum.Docs]: '/docs',
};
