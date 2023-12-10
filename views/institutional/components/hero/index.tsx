import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const Hero: FC = () => (
  <Box
    pt="10xl"
    minHeight="100vh"
    bg="url(/img/hero.png)"
    backgroundPosition="bottom center"
    backgroundSize="cover"
  >
    <Box mt="2xl">Hero</Box>
  </Box>
);

export default Hero;
