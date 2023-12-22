import { Box, Button } from '@interest-protocol/ui-kit';
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
    <a
      href={path}
      target={path.startsWith('#') ? '_self' : '_blank'}
      rel={path.startsWith('#') ? undefined : 'noreferrer'}
    >
      <Button variant="text">{name}</Button>
    </a>
  </>
);

export default NavbarItem;
