import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { NavbarItemProps } from './navbar.types';

const NavbarItem: FC<NavbarItemProps> = ({ name, index }) => (
  <>
    {!!index && (
      <Box
        bg="onSurface"
        width="0.25rem"
        height="0.25rem"
        borderRadius="full"
      />
    )}
    <Button variant="text">{name}</Button>
  </>
);

export default NavbarItem;
