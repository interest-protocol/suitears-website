import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const FeatureDescription: FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Typography
      textAlign="center"
      as="h1"
      whiteSpace="wrap"
      fontSize={['2.5rem', '3.563rem']}
      fontWeight="900"
      lineHeight="4rem"
      textTransform="uppercase"
      color="onSurface"
      size="large"
      variant="body"
    >
      Easy peasy {<br />}& fun
    </Typography>
    <Button textTransform="uppercase" my="2rem" variant="filled">
      Get started
    </Button>
  </Box>
);

export default FeatureDescription;
