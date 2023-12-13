import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { HeartSVG, IPXSVG } from '@/components/svg';

import SocialSection from './socials-section';

const Footer: FC = () => (
  <Box
    pr="s"
    pb="xl"
    pl="xs"
    pt="8xl"
    fontSize="s"
    display="flex"
    fontFamily="Proto"
    alignItems="center"
    flexDirection="column"
    textTransform="uppercase"
  >
    <Box textAlign="center" mb="l" maxWidth="96%" minWidth="90rem">
      <Typography
        size={'medium'}
        fontWeight="500"
        variant={'body'}
        fontFamily="Proto"
      >
        This DApp is maintained &
      </Typography>
      <Typography
        gap="0.25rem"
        display="flex"
        size={'medium'}
        variant={'body'}
        fontFamily="Proto"
        justifyContent="center"
      >
        built with
        <HeartSVG maxHeight="1.125rem" maxWidth="1.125rem" width="100%" />
        By Interest Protocol
      </Typography>
    </Box>
    <SocialSection />
    <Box
      py="m"
      width="100%"
      display="flex"
      borderTop="1px solid"
      justifyContent="center"
      borderColor="outlineVariant"
    >
      <a href="https://interestprotocol.com/" target="_blank" rel="noreferrer">
        <IPXSVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" />
      </a>
    </Box>
  </Box>
);

export default Footer;
