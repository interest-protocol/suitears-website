import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MENU_ITEMS } from './navbar.data';
import NavbarItem from './navbar-item';

const Navbar: FC = () => (
  <Box
    p="xs"
    gap="xs"
    borderRadius="full"
    alignItems="center"
    bg="lowestContainer"
    display={['none', 'none', 'none', 'flex']}
  >
    {MENU_ITEMS.map(({ name }, index) => (
      <NavbarItem name={name} index={index} key={index} />
    ))}
  </Box>
);

export default Navbar;
