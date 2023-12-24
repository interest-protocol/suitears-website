import { Box, Button } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import useEventListener from '@/hooks/use-event-listener';

import MenuOptions from '../menu-options';
import { BarsSVG } from '../svg';

const Menu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEventListener('resize', () => setIsMenuOpen(false), true);

  return (
    <>
      <Box
        gap="m"
        cursor="pointer"
        borderRadius="full"
        alignItems="center"
        border="0.25rem solid"
        transition="all 0.3s ease-in-out"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        display={['flex', 'flex', 'flex', 'flex', 'none']}
        nHover={{ bg: 'accent', transform: 'scale(1.15)' }}
        borderColor={isMenuOpen ? 'rgba(0, 83, 219, 0.16)' : 'transparent'}
      >
        <Button isIcon variant="text">
          <BarsSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </Button>
      </Box>
      <MenuOptions
        isMenuOpen={isMenuOpen}
        accountInfo="0x025f...E3fa"
        onOutsideClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Menu;
