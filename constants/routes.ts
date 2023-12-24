export enum RoutesEnum {
  Home = 'home',
  Docs = 'docs',
  Repo = 'repo',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Home]: '/',
  [RoutesEnum.Docs]: '/docs',
  [RoutesEnum.Repo]: 'https://github.com/interest-protocol/suitears',
};
