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
      fontSize={['6xl', '8xl']}
      fontWeight="900"
      lineHeight="6xl"
      textTransform="uppercase"
      color="onSurface"
      size="large"
      variant="body"
    >
      Easy peasy {<br />}& fun
    </Typography>
    <Button textTransform="uppercase" my="5xl" variant="filled">
      Get started
    </Button>
  </Box>
);

export default FeatureDescription;
