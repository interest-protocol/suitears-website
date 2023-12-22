import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Menu from '../menu';
import Navbar from '../navbar';
import { LogoSVG } from '../svg';

const Header: FC = () => {
  const gotoDocs = () =>
    window.open(
      'https://docs.interestprotocol.com/overview/sui-tears',
      '_blank'
    );

  return (
    <Box
      top="0"
      zIndex={1}
      width="100vw"
      display="flex"
      position="fixed"
      alignItems="center"
      borderColor="outlineVariant"
      justifyContent="space-between"
      bg="rgba(255, 255, 255, 0.48)"
      px={['l', 'l', 'l', 'l', '8xl']}
      py={['l', 'l', 'l', 'l', '2xl']}
      border="1px solid outlineVariant"
    >
      <LogoSVG maxWidth="100%" maxHeight="2.5rem" height="100%" />
      <Navbar />
      <Button
        py="m"
        variant="filled"
        onClick={gotoDocs}
        display={['none', 'none', 'none', 'none', 'flex']}
      >
        Get started
      </Button>
      <Menu />
    </Box>
  );
};

export default Header;
