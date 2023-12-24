import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

import { BookSVG, GithubSVG } from '@/components/svg';
import { Routes, RoutesEnum } from '@/constants/routes';

import Copy from './copy';
import Dependencies from './hero-illustration/dependencies';
import FolderDir from './hero-illustration/folder-dir';
import Modules from './hero-illustration/module';
import Repository from './hero-illustration/repository';

const transition = () =>
  ({
    repeat: Infinity,
    repeatType: 'reverse',
    duration: Math.random() * 2 + 1,
  }) as never;

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
        <Motion
          top="3rem"
          width="27.5rem"
          maxHeight="12rem"
          maxWidth="27.5rem"
          position="absolute"
          initial={{ rotate: 0 }}
          transition={transition()}
          whileHover={{ scale: 1.1 }}
          right={['-50%', '-40%', '-20%', '-7%']}
          animate={{
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
        >
          <Dependencies maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Motion>
        <Motion
          bottom="10%"
          width="31.0625rem"
          position="absolute"
          maxHeight="6.1875rem"
          maxWidth="31.0625rem"
          whileHover={{ scale: 1.1 }}
          left={['-50%', '-30%', '-10%', '-5%']}
          initial={{ rotate: 0 }}
          animate={{
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
          transition={transition()}
        >
          <Modules maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Motion>
        <Motion
          bottom="3rem"
          width="38.1rem"
          maxHeight="38.1rem"
          maxWidth="20.8rem"
          position="absolute"
<<<<<<< Updated upstream
          initial={{ rotate: 0 }}
          transition={transition()}
          whileHover={{ scale: 1.1 }}
          right={['-30%', '-20%', '-10%', '-7%']}
=======
<<<<<<< Updated upstream
=======
          initial={{ rotate: 0 }}
          transition={transition()}
          whileHover={{ scale: 1.1 }}
          right={['-40%', '-20%', '-10%', '-7%']}
>>>>>>> Stashed changes
          animate={{
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        >
          <Repository maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Motion>
        <Motion
          position="absolute"
          initial={{ rotate: 0 }}
          transition={transition()}
          whileHover={{ scale: 1.1 }}
          left={['-10%', '-10%', '-10%', '0%']}
          top={['0.5rem', '0.5rem', '0.5rem', '4rem']}
          maxWidth={['13rem', '15rem', '17rem', '20rem']}
          maxHeight={['20rem', '15rem', '17rem', '25rem']}
          animate={{
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
        >
          <FolderDir maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Motion>
        <Motion
          position="absolute"
          initial={{ rotate: 0 }}
          transition={transition()}
          whileHover={{ scale: 1.1 }}
          left={['55%', '55%', '55%', '65%']}
          maxWidth={['5rem', '5rem', '5rem', '8rem']}
          top={['0.5rem', '0.5rem', '0.5rem', '4rem']}
          maxHeight={['5rem', '5rem', '5rem', '8rem']}
          animate={{
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
        >
          <Copy maxHeight="inherit" maxWidth="inherit" width="100%" />
        </Motion>
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
        <Link href={Routes[RoutesEnum.Docs]}>
          <Button
            mt="8xl"
            variant="filled"
            SuffixIcon={
              <BookSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
            }
          >
            Documentation
          </Button>
        </Link>
        <a href={Routes[RoutesEnum.Repo]} target="_blank" rel="noreferrer">
          <Button
            mt="l"
            variant="outline"
            textTransform="uppercase"
            SuffixIcon={
              <GithubSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
            }
          >
            Get started
          </Button>
        </a>
      </Box>
    </Box>
  </Box>
);

export default Hero;
