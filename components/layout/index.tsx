import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    backgroundImage="linear-gradient(0deg, #EEEA, #EEEA), url('/img/noise.webp')"
    backgroundPosition="top left"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    minHeight="100vh"
  >
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Layout;
