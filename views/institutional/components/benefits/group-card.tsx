import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BenefitsCard from './benefit-card';
import CoinsIllustration from './illustration/coins-illustration';
import { DAOSVG, FarmingSVG } from './illustration/illustration-svg';

const BenefitGroupCard: FC = () => (
  <Box
    gap="l"
    display="grid"
    gridTemplateColumns={['1fr', '1fr', '1fr 1fr', 'repeat(3, 1fr)']}
  >
    <BenefitsCard
      title="Airdrop"
      Icon={
        <Box width="100%" position="relative" height="20rem" my="m">
          <CoinsIllustration />
        </Box>
      }
      description="Efficiently distribute tokens to a specified set of recipients after a
          defined date."
    />
    <BenefitsCard
      title="Farming"
      Icon={
        <Box mx="auto">
          <FarmingSVG maxHeight="14.6rem" maxWidth="9.5rem" width="100%" />
        </Box>
      }
      description="Implement reward mechanisms for coin holders over time, driving engagement and participation."
    />
    <BenefitsCard
      title="DAO"
      Icon={
        <Box mx="auto">
          <DAOSVG maxHeight="11.6rem" maxWidth="17.5rem" width="100%" />
        </Box>
      }
      description="Establish decentralized autonomous organizations for community-driven
        decision-making and governance."
    />
  </Box>
);

export default BenefitGroupCard;
