import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const HowItWorksDescription: FC = () => {
  const gotoDocs = () =>
    window.open(
      'https://docs.interestprotocol.com/overview/sui-tears',
      '_blank'
    );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        textAlign="center"
        as="h1"
        fontSize={['6xl', '8xl']}
        fontWeight="900"
        lineHeight="6xl"
        textTransform="uppercase"
        color="onSurface"
        size="large"
        variant="body"
      >
        Easy peasy <br />& fun
      </Typography>
      <Button
        my="5xl"
        variant="filled"
        onClick={gotoDocs}
        textTransform="uppercase"
      >
        Get started
      </Button>
    </Box>
  );
};

export default HowItWorksDescription;
