import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Copy from './copy';
import Dependencies from './hero-illustration/dependencies';
import FolderDir from './hero-illustration/folder-dir';

const Hero: FC = () => (
  <Box
    pt="10xl"
    minHeight="100%"
    bg="url(/img/hero.webp)"
    backgroundPosition="bottom center"
    backgroundSize="cover"
  >
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      flexDirection="column"
      justifyContent="center"
    >
      <Box>
        <Box
          position="absolute"
          left={['-10%', '0%']}
          top={['0.5rem', '4rem']}
          maxWidth={['13rem', '20rem']}
          maxHeight={['20rem', '25rem']}
        >
          <FolderDir maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
        <Box
          top="4rem"
          left="65%"
          maxWidth="8rem"
          maxHeight="8rem"
          position="absolute"
        >
          <Copy maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
        <Box
          top="3rem"
          right="-7%"
          width="27.5rem"
          maxHeight="12rem"
          maxWidth="27.5rem"
          position="absolute"
        >
          <Dependencies maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
        <Box
          top="3rem"
          right="-7%"
          width="27.5rem"
          maxHeight="12rem"
          maxWidth="27.5rem"
          position="absolute"
        >
          <Dependencies maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={['100%', '100%', '100%', '40%']}
        height={['100%', '100%', '100%', '35%']}
      >
        <Typography
          as="h1"
          textAlign="center"
          fontSize={['6xl', '8xl']}
          fontWeight="900"
          lineHeight="6xl"
          textTransform="uppercase"
          color="onSurface"
          size="large"
          variant="body"
        >
          Streamlined Development for Move Creators
        </Typography>
        <Button textTransform="uppercase" my="8xl" variant="filled">
          Get started
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Hero;
