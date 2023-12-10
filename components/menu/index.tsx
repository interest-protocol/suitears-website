import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BarsSVG } from '../svg';

const Menu: FC = () => {
  return (
    <Box position="relative" display={['flex', 'none']}>
      <Button isIcon variant="text">
        <BarsSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
      </Button>
    </Box>
  );
};

export default Menu;
