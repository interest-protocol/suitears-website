import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BenefitGroupCard from './group-card';
import BenefitHeader from './header';

const Benefits: FC = () => (
  <Box pt="8xl" px={['l', '8xl']} id="features">
    <BenefitHeader />
    <BenefitGroupCard />
  </Box>
);

export default Benefits;
