import { Box, Tag, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const BenefitHeader: FC = () => (
  <Box
    mt="2xl"
    mx="auto"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    py={['2xl', '2xl', '2xl', '8xl']}
    maxWidth={['100%', '100%', '100%', '50%']}
  >
    <Tag variant="outline" size="medium" width="max-content" mb="2xl">
      Unique Feature
    </Tag>
    <Typography
      mb="m"
      size="large"
      variant="title"
      fontWeight="700"
      fontStyle="normal"
      textAlign="center"
      textTransform="uppercase"
      fontSize={['6xl', '6xl', '6xl', '7xl']}
      lineHeight={['4xl', '4xl', '4xl', '5xl']}
    >
      benefits to <br /> real-world applications
    </Typography>
    <Typography variant="body" size="large" textAlign="center">
      Suitears encompasses a comprehensive suite of smart contracts, ranging
      from Airdrops, Vesting mechanisms, DAOs, Liquid Staking, Math, and other
      functionalities.
    </Typography>
  </Box>
);

export default BenefitHeader;
