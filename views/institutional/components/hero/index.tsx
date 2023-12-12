import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const Hero: FC = () => (
  <Box
    pt="10xl"
    minHeight="100vh"
    bg="url(/img/hero.png)"
    backgroundPosition="bottom center"
    backgroundSize="cover"
  >
    <Box
      height="100vh"
      width="100vw"
      overflow="hidden"
      bg="url(/img/hero-illustration.svg)"
      backgroundPosition="bottom center"
      backgroundSize="cover"
    >
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={['100%', '100%', '100%', '40%']}
          height={['100%', '100%', '100%', '35%']}
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
            Streamlined Development for Move Creators
          </Typography>
          <Button textTransform="uppercase" my="4rem" variant="filled">
            Get started
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Hero;
