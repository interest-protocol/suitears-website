import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { HeartSVG, IPXSVG } from '@/components/svg';

import SocialSection from './socials-section';

const Footer: FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    px={['xl', 'xl', '4xl']}
    textTransform="uppercase"
  >
    <Box mb="l">
      <Typography textAlign="center" size="large" variant="label">
        This DApp is maintained &
      </Typography>
      <Typography
        size="large"
        gap="0.25rem"
        display="flex"
        variant="label"
        justifyContent="center"
      >
        built with
        <Box mx="xs" as="span" color="error">
          <HeartSVG width="100%" maxWidth="1.125rem" maxHeight="1.125rem" />
        </Box>
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
