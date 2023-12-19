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
        size="medium"
        variant="body"
        fontWeight="500"
        fontFamily="Proto"
      >
        This DApp is maintained &
      </Typography>
      <Typography
        gap="0.25rem"
        size="medium"
        display="flex"
        variant="body"
        fontFamily="Proto"
        justifyContent="center"
      >
        built with
        <Typography size="medium" variant="body" color="error">
          <HeartSVG width="100%" maxWidth="1.125rem" maxHeight="1.125rem" />
        </Typography>
        By Interest Protocol
      </Typography>
    </Box>
    <SocialSection />
    <Box
      py="m"
      width="100%"
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
