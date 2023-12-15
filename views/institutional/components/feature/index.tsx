import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import FeatureDescription from './feature-description';
import FeatureHeader from './feature-header';

const Feature: FC = () => (
  <Box
    height={['260vh', '260vh', '260vh', '310vh']}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <FeatureHeader />
    <Box
      width={['100%', '100%', '100%', '75rem']}
      height={['80vh', '80vh', '80vh', '80%']}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        height={['70vh', '70vh', '70vh', '100%']}
        width={['100%', '100%', '100%', '100%']}
        overflow="hidden"
        bg="url(/img/features.webp)"
        backgroundPosition="bottom center"
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
      ></Box>
    </Box>
    <FeatureDescription />
  </Box>
);

export default Feature;
