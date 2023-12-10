import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const Navbar: FC = () => (
  <Box
    p="xs"
    gap="xs"
    bg="lowestContainer"
    borderRadius="full"
    alignItems="center"
    display={['none', 'flex']}
  >
    <Button variant="text">Features</Button>
    <Box bg="onSurface" borderRadius="full" width="0.25rem" height="0.25rem" />
    <Button variant="text">Proven</Button>
    <Box bg="onSurface" borderRadius="full" width="0.25rem" height="0.25rem" />
    <Button variant="text">How it works</Button>
    <Box bg="onSurface" borderRadius="full" width="0.25rem" height="0.25rem" />
    <Button variant="text">Documentation</Button>
  </Box>
);

export default Navbar;
