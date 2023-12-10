import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    backgroundImage="linear-gradient(0deg, #FFFB, #FFFB), url('/img/noise.png')"
    backgroundPosition="top left"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    minHeight="100vh"
  >
    <Header />
    {children}
  </Box>
);

export default Layout;
