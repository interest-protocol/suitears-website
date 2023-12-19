import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { HeartSVG, IPXSVG } from '@/components/svg';

import SocialSection from './socials-section';

const Footer: FC = () => (
  <Box
    fontSize="s"
    display="flex"
    flexDirection="column"
    textTransform="uppercase"
  >
    <Box textAlign="center" mb="l">
      <Typography size="large" variant="label" fontWeight="500">
        This DApp is maintained &
      </Typography>
      <Typography
        gap="0.25rem"
        size="large"
        display="flex"
        variant="label"
        justifyContent="center"
      >
        built with
        <HeartSVG width="100%" maxWidth="1.125rem" maxHeight="1.125rem" />
        By Interest Protocol
      </Typography>
    </Box>
    <SocialSection />
    <Box
      py="m"
      display="flex"
      color="primary"
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
