import { Box, Tag, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const HowItWorksHeader: FC = () => (
  <Box
    mt="2xl"
    py={['3xl', '3xl', '3xl', '8xl']}
    mx="auto"
    width={['100%', '100%', '100%', '40rem']}
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Tag variant="outline" size="medium" width="max-content" mb="2xl">
      How it works
    </Tag>
    <Typography
      size="large"
      variant="title"
      fontWeight="700"
      fontStyle="normal"
      textAlign="center"
      fontSize="7xl"
      lineHeight="5xl"
      textTransform="uppercase"
    >
      Seamless <br /> Integration
    </Typography>
    <Typography variant="body" size="large" textAlign="center" p="s">
      Suitears is designed for ease of integration.
      <br />
      Let&apos;s walkthrough on how to implement a DAO in 4 steps.
    </Typography>
  </Box>
);

export default HowItWorksHeader;
