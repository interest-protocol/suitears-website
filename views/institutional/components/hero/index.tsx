import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Copy from './copy';
import Dependencies from './hero-illustration/dependencies';
import FolderDir from './hero-illustration/folder-dir';
import Modules from './hero-illustration/module';
import Repository from './hero-illustration/repository';

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
      display="flex"
      alignItems="center"
      position="relative"
      flexDirection="column"
      justifyContent="center"
      height="calc(100vh - 5rem)"
    >
      <Box>
        <Box
          top="3rem"
          width="27.5rem"
          maxHeight="12rem"
          maxWidth="27.5rem"
          position="absolute"
          right={['-50%', '-40%', '-20%', '-7%']}
        >
          <Dependencies maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
        <Box
          bottom="10%"
          width="31.0625rem"
          position="absolute"
          maxHeight="6.1875rem"
          maxWidth="31.0625rem"
          left={['-50%', '-30%', '-10%', '-5%']}
        >
          <Modules maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
        <Box
          right={['-30%', '-20%', '-10%', '-7%']}
          bottom="3rem"
          width="38.1rem"
          maxHeight="38.1rem"
          maxWidth="20.8rem"
          position="absolute"
        >
          <Repository maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
        <Box
          position="absolute"
          left={['-10%', '-10%', '-10%', '0%']}
          top={['0.5rem', '0.5rem', '0.5rem', '4rem']}
          maxWidth={['13rem', '15rem', '17rem', '20rem']}
          maxHeight={['20rem', '15rem', '17rem', '25rem']}
        >
          <FolderDir maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
        <Box
          position="absolute"
          left={['55%', '55%', '55%', '65%']}
          maxWidth={['5rem', '5rem', '5rem', '8rem']}
          top={['0.5rem', '0.5rem', '0.5rem', '4rem']}
          maxHeight={['5rem', '5rem', '5rem', '8rem']}
        >
          <Copy maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Box>
      </Box>
      <Box
        display="flex"
        position="relative"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        width={['100%', '100%', '100%', '40%']}
        height={['100%', '100%', '100%', '35%']}
      >
        <Typography
          as="h1"
          size="large"
          variant="body"
          fontWeight="900"
          lineHeight="6xl"
          color="onSurface"
          textAlign="center"
          textTransform="uppercase"
          fontSize={['6xl', '8xl']}
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
