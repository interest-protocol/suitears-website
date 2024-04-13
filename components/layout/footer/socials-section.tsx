import { Box, Typography } from '@interest-protocol/ui-kit';

import { DiscordSVG, GithubSVG, TelegramSVG, XSVG } from '@/components/svg';
const SocialSection = () => (
  <Box my="2xl">
    <Typography size="large" variant="label" textAlign="center">
      Follow us
    </Typography>
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
        target="_blank"
        rel="noreferrer"
        href="https://github.com/interest-protocol/"
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
      <a href="https://t.me/interestprotocol" target="_blank" rel="noreferrer">
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
      <a href="https://x.com/IPXSui" target="_blank" rel="noreferrer">
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
);

export default SocialSection;
