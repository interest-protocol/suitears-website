import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BarsSVG } from '../svg';
import { MenuProps } from './menu.types';

const Menu: FC<MenuProps> = ({ onClick }) => {
  return (
    <Box onClick={onClick} position="relative" display={['flex', 'none']}>
      <Button isIcon variant="text">
        <BarsSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
      </Button>
    </Box>
  );
};

export default Menu;
