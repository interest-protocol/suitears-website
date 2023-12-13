import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';

import { DiscordSVG, GithubSVG, TelegramSVG, XSVG } from '@/components/svg';
const SocialSection = () => (
  <Box my="2xl">
    <Box fontFamily="Proto">
      <Typography
        size={'medium'}
        fontWeight="500"
        variant={'body'}
        fontFamily="Proto"
        textAlign="center"
      >
        Follow us
      </Typography>
    </Box>
    <Box display="flex" gap="xs" justifyContent="center" mt="s">
      <Link
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
      </Link>
      <Link
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
      </Link>
      <Link
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
      </Link>
      <Link
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
      </Link>
    </Box>
  </Box>
);

export default SocialSection;
