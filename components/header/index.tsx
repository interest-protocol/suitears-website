import { Box, Button } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import useEventListener from '@/hooks/use-event-listener';

import Menu from '../menu';
import MenuOptions from '../menu-options';
import Navbar from '../navbar';
import { LogoSVG } from '../svg';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEventListener('resize', () => setIsMenuOpen(false), true);

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
      {isMenuOpen}

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
      <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <MenuOptions
        onOutsideClick={() => setIsMenuOpen(false)}
        isMenuOpen={isMenuOpen}
      />
    </Box>
  );
};

export default Header;
