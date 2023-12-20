import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  MoveDaoSourceSVG,
  MoveDaoSVG,
  MoveTomlSVG,
  MyMoveDaoSVG,
} from '@/components/svg';

import FeatureCard from './feature-card';
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
    <FeatureCard
      number={1}
      description="Add the following snippet in your Move.toml file"
      icon={<MoveTomlSVG maxWidth="39.938rem" width="100%" maxHeight="15rem" />}
      toRevert={false}
    />
    <FeatureCard
      number={2}
      description="Find and copy the name of the DAO module."
      icon={<MoveDaoSVG maxWidth="42.063rem" width="100%" />}
      toRevert
    />
    <FeatureCard
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
    <FeatureCard
      number={4}
      description="Create a DAO with one function call"
      icon={
        <MyMoveDaoSVG maxWidth="43.938rem" width="100%" maxHeight="28.438rem" />
      }
      toRevert
      isCentered
    />
    <FeatureDescription />
  </Box>
);

export default Feature;
