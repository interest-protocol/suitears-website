import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  MoveDaoSourceSVG,
  MoveDaoSVG,
  MoveTomlSVG,
  MyMoveDaoSVG,
} from '@/components/svg';

import HowItWorksCard from './how-it-works-card';
import HowItWorksDescription from './how-it-works-description';
import HowItWorksHeader from './how-it-works-header';

const HowItWorks: FC = () => (
  <Box
    pt="8xl"
    display="flex"
    id="how-it-works"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <HowItWorksHeader />
    <HowItWorksCard
      number={1}
      description="Add the following snippet in your Move.toml file"
      icon={<MoveTomlSVG maxWidth="39.938rem" width="100%" maxHeight="15rem" />}
      toRevert={false}
    />
    <HowItWorksCard
      number={2}
      description="Find and copy the name of the DAO module."
      icon={<MoveDaoSVG maxWidth="42.063rem" maxHeight="24rem" width="100%" />}
      toRevert
    />
    <HowItWorksCard
      number={3}
      description="Import the DAO module"
      isCentered
      icon={
        <MoveDaoSourceSVG
          maxWidth="42.438rem"
          width="100%"
          maxHeight="26.563rem"
        />
      }
      toRevert={false}
    />
    <HowItWorksCard
      number={4}
      description="Create a DAO with one function call"
      icon={
        <MyMoveDaoSVG maxWidth="43.938rem" width="100%" maxHeight="28.438rem" />
      }
      toRevert
      isCentered
    />
    <HowItWorksDescription />
  </Box>
);

export default HowItWorks;
