import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

import { BookSVG, GithubSVG } from '@/components/svg';
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
      <Button
        mt="5xl"
        variant="filled"
        textTransform="uppercase"
        SuffixIcon={<BookSVG maxHeight="1rem" maxWidth="1rem" width="100%" />}
      >
        Documentation
      </Button>
    </Link>
    <a href={Routes[RoutesEnum.Repo]} target="_blank" rel="noreferrer">
      <Button
        mt="l"
        variant="outline"
        textTransform="uppercase"
        SuffixIcon={<GithubSVG maxHeight="1rem" maxWidth="1rem" width="100%" />}
      >
        Get started
      </Button>
    </a>
  </Box>
);

export default HowItWorksDescription;
