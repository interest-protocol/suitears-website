import { Box, Button } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

import { NavbarItemProps } from './navbar.types';

const NavbarItem: FC<NavbarItemProps> = ({ name, path, index }) => (
  <>
    {!!index && (
      <Box
        bg="onSurface"
        width="0.25rem"
        height="0.25rem"
        borderRadius="full"
      />
    )}
    <Link href={path}>
      <Button variant="text">{name}</Button>
    </Link>
  </>
);

export default NavbarItem;
