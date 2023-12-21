import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Menu from '../menu';
import Navbar from '../navbar';
import { LogoSVG } from '../svg';

const Header: FC = () => {
  const gotoRepo = () =>
    window.open('https://github.com/interest-protocol/suitears', '_blank');

  return (
    <Box
      top="0"
      width="100vw"
      display="flex"
      position="fixed"
      px={['l', '8xl']}
      py={['l', '2xl']}
      alignItems="center"
      borderColor="outlineVariant"
      justifyContent="space-between"
      bg="rgba(255, 255, 255, 0.48)"
      border="1px solid outlineVariant"
    >
      <LogoSVG maxWidth="100%" maxHeight="2.5rem" height="100%" />
      <Navbar />
      <Button
        variant="filled"
        onClick={gotoRepo}
        py="m"
        display={['none', 'flex']}
      >
        Get started
      </Button>
      <Menu />
    </Box>
  );
};

export default Header;
