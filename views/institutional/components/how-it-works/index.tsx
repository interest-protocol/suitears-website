import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import toast from 'react-hot-toast';

import {
  MoveDaoSourceSVG,
  MoveDaoSVG,
  MoveTomlSVG,
  MyMoveDaoSVG,
} from '@/components/svg';

import HowItWorksCard from './how-it-works-card';
import HowItWorksDescription from './how-it-works-description';
import HowItWorksHeader from './how-it-works-header';

const transition = () =>
  ({
    repeat: Infinity,
    repeatType: 'reverse',
    duration: Math.random() * 2 + 1,
  }) as never;

const copyToClipboard = (value: string) => {
  window.navigator.clipboard.writeText(value);

  toast('Copied to clipboard');
};

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
      icon={
        <Motion
          cursor="pointer"
          width={['20rem', '20rem', '39.938rem']}
          transition={transition()}
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{
            rotate: [0, 0],
            scale: [1.1, 1.1],
            translateY: ['0rem', '0rem'],
          }}
          animate={{
            scale: [1, 1],
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
          onClick={() =>
            copyToClipboard(
              `[dependencies.SuiTears]\ngit = "https://github.com interest-protocol/suitears.git"\nsubdir = "contracts"\nrev = "testnet"`
            )
          }
        >
          <MoveTomlSVG maxWidth="39.938rem" width="100%" maxHeight="15rem" />
        </Motion>
      }
      toRevert={false}
    />
    <HowItWorksCard
      number={2}
      description="Find and copy the name of the DAO module."
      icon={
        <Motion
          cursor="pointer"
          width={['20rem', '20rem', '42.063rem']}
          transition={transition()}
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{
            rotate: [0, 0],
            scale: [1.1, 1.1],
            translateY: ['0rem', '0rem'],
          }}
          animate={{
            scale: [1, 1],
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
          onClick={() => copyToClipboard('SuiTears 💧')}
        >
          <MoveDaoSVG maxWidth="42.063rem" maxHeight="24rem" width="100%" />
        </Motion>
      }
      toRevert
    />
    <HowItWorksCard
      number={3}
      description="Import the DAO module"
      isCentered
      icon={
        <Motion
          cursor="pointer"
          width={['20rem', '20rem', '42.438rem']}
          transition={transition()}
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{
            rotate: [0, 0],
            scale: [1.1, 1.1],
            translateY: ['0rem', '0rem'],
          }}
          animate={{
            scale: [1, 1],
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
          onClick={() => copyToClipboard('use suitears::dao;')}
        >
          <MoveDaoSourceSVG
            maxWidth="42.438rem"
            width="100%"
            maxHeight="26.563rem"
          />
        </Motion>
      }
      toRevert={false}
    />
    <HowItWorksCard
      number={4}
      description="Create a DAO with one function call"
      icon={
        <Motion
          cursor="pointer"
          width={['20rem', '20rem', '43.938rem']}
          transition={transition()}
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{
            rotate: [0, 0],
            scale: [1.1, 1.1],
            translateY: ['0rem', '0rem'],
          }}
          animate={{
            scale: [1, 1],
            rotate: [-(3 * Math.random()), 3 * Math.random()],
            translateY: [
              '0rem',
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
              `${Math.random() / 3}rem`,
            ],
          }}
          onClick={() =>
            copyToClipboard(
              `fun init(otw: INTEREST_PROTOCOL_DAO, ctx: &mut TxContext) {\n\tpublic_share_object(dao::create<INTEREST_PROTOCOL_DAO, SUI>(`
            )
          }
        >
          <MyMoveDaoSVG
            maxWidth="43.938rem"
            width="100%"
            maxHeight="28.438rem"
          />
        </Motion>
      }
      toRevert
      isCentered
    />
    <HowItWorksDescription />
  </Box>
);

export default HowItWorks;
