import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants/routes';

const HowItWorksDescription: FC = () => (
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
      Easy & Secure
    </Typography>
    <Link href={Routes[RoutesEnum.Docs]}>
      <Button mt="5xl" variant="filled" textTransform="uppercase">
        Documentation
      </Button>
    </Link>
    <a href={Routes[RoutesEnum.Repo]} target="_blank" rel="noreferrer">
      <Button mt="l" variant="outline" textTransform="uppercase">
        Get started
      </Button>
    </a>
  </Box>
);

export default HowItWorksDescription;
