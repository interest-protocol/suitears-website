import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants/routes';

import Menu from '../menu';
import Navbar from '../navbar';
import { GithubSVG, LogoSVG } from '../svg';

const Header: FC = () => (
  <Box
    top="0"
    zIndex={1}
    width="100vw"
    display="flex"
    position="fixed"
    alignItems="center"
    borderColor="outlineVariant"
    justifyContent="space-between"
    bg="rgba(255, 255, 255, 0.48)"
    px={['l', 'l', 'l', 'l', '8xl']}
    py={['l', 'l', 'l', 'l', '2xl']}
    border="1px solid outlineVariant"
  >
    <LogoSVG maxWidth="100%" maxHeight="2.5rem" height="100%" />
    <Navbar />
    <a href={Routes[RoutesEnum.Repo]} target="_blank" rel="noreferrer">
      <Button
        py="m"
        variant="filled"
        display={['none', 'none', 'none', 'none', 'flex']}
        SuffixIcon={<GithubSVG maxHeight="1rem" maxWidth="1rem" width="100%" />}
      >
        Get started
      </Button>
    </a>
    <Menu />
  </Box>
);

export default Header;
