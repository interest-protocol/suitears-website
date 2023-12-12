import { Box, Tag, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const BenefitHeader: FC = () => (
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
      Unique Feature
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
      benefits to {<br />} real-world applications
    </Typography>
    <Typography variant="body" size="large" textAlign="center">
      Suitears encompasses a comprehensive suite of smart contracts, ranging
      from Airdrops, Vesting mechanisms, DAOs, Liquid Staking, Math, and other
      functionalities.
    </Typography>
  </Box>
);

export default BenefitHeader;
