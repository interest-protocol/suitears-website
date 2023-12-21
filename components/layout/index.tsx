import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    minHeight="100vh"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="top left"
    backgroundImage="linear-gradient(0deg, #EEEA, #EEEA), url('/img/noise.webp')"
  >
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Layout;
