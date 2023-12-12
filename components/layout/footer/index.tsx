import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  DiscordSVG,
  GithubSVG,
  HeartSVG,
  IPXSVG,
  TelegramSVG,
  XSVG,
} from '@/components/svg';

const Footer: FC = () => (
  <Box
    fontSize="s"
    display="flex"
    fontFamily="Proto"
    flexDirection="column"
    alignItems="center"
    textTransform="uppercase"
    padding="4rem 0.75rem 1.5rem 0.75rem"
  >
    <Box
      textAlign="center"
      mb="l"
      maxWidth="96%"
      minWidth="90rem"
      fontSize="inherit"
      fontFamily="inherit"
      justifyContent="center"
    >
      <Typography
        size={'small'}
        fontSize="inherit"
        variant={'display'}
        fontFamily="inherit"
        lineHeight="1.25rem"
      >
        This DApp is maintained &
      </Typography>
      <Typography
        gap="0.25rem"
        size={'small'}
        display="flex"
        lineHeight={0}
        fontSize="inherit"
        variant={'display'}
        fontFamily="inherit"
        justifyContent="center"
      >
        built with
        <HeartSVG maxHeight="1.125rem" maxWidth="1.125rem" width="100%" />
        By Interest Protocol
      </Typography>
    </Box>
    <Box textAlign="center" my="2xl" fontSize="inherit" fontFamily="inherit">
      <Box fontFamily="Proto">Follow us</Box>
      <Box display="flex" gap="xs" justifyContent="center" mt="s">
        <a
          href="https://discord.gg/interestprotocol"
          target="_blank"
          rel="noreferrer"
        >
          <Box
            p="xs"
            width="2.5rem"
            height="2.5rem"
            border="1px solid"
            borderRadius="full"
            borderColor="outline"
          >
            <DiscordSVG maxHeight="100%" maxWidth="100%" width="100%" />
          </Box>
        </a>
        <a
          href="https://github.com/interest-protocol/"
          target="_blank"
          rel="noreferrer"
        >
          <Box
            p="xs"
            width="2.5rem"
            height="2.5rem"
            border="1px solid"
            borderRadius="full"
            borderColor="outline"
          >
            <GithubSVG maxHeight="100%" maxWidth="100%" width="100%" />
          </Box>
        </a>
        <a
          href="https://t.me/interestprotocol"
          target="_blank"
          rel="noreferrer"
        >
          <Box
            p="xs"
            width="2.5rem"
            height="2.5rem"
            border="1px solid"
            borderRadius="full"
            borderColor="outline"
          >
            <TelegramSVG maxHeight="100%" maxWidth="100%" width="100%" />
          </Box>
        </a>
        <a
          href="https://x.com/interest_dinero"
          target="_blank"
          rel="noreferrer"
        >
          <Box
            p="xs"
            width="2.5rem"
            height="2.5rem"
            border="1px solid"
            borderRadius="full"
            borderColor="outline"
          >
            <XSVG maxHeight="100%" maxWidth="100%" height="100%" />
          </Box>
        </a>
      </Box>
    </Box>
    <Box
      py="m"
      display="flex"
      borderTop="1px solid"
      borderColor="#C6C6CA"
      justifyContent="center"
      width="100%"
    >
      <a href="https://interestprotocol.com/" target="_blank" rel="noreferrer">
        <IPXSVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" />
      </a>
    </Box>
  </Box>
);

export default Footer;
