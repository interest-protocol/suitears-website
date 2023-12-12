import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BenefitGroupCard from './group-card';
import BenefitHeader from './header';

const Benefits: FC = () => (
  <Box pb="6rem" px={['l', '8xl']}>
    <BenefitHeader />
    <BenefitGroupCard />
  </Box>
);

export default Benefits;
