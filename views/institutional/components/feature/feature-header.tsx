import { Box, Tag, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const FeatureHeader: FC = () => (
  <Box
    mt="2xl"
    py={['2rem', '2rem', '2rem', '4rem']}
    mx="auto"
    width={['100%', '100%', '100%', '40rem']}
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Tag variant="outline" size="medium" width="max-content" mb="2rem">
      How it works
    </Tag>
    <Typography
      size="large"
      mb="1rem"
      variant="title"
      fontWeight="700"
      fontStyle="normal"
      textAlign="center"
      fontSize="2.8125rem"
      lineHeight="3.25rem"
      fontFamily="Satoshi"
      textTransform="uppercase"
    >
      Seamless {<br />} Integration
    </Typography>
    <Typography variant="body" size="large" textAlign="center">
      Suitears is designed for ease of integration.{<br />}
      Let&apos;s walkthrough on how to implement a DAO in 4 steps.
    </Typography>
  </Box>
);

export default FeatureHeader;
