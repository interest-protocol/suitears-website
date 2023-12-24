import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  BottomCoin,
  DAOUser,
  FarmingBase,
  FarmingCoin,
  FifthCoin,
  FirstCoin,
  FourthCoin,
  SecondCoin,
  ThirdCoin,
} from './illustration-svg';
import { coinsVariants } from './illustration-variants';

export const AirdropIllustration: FC = () => (
  <Box width="100%" position="relative" height="15rem" my="m">
    <Motion
      right="50%"
      width="100%"
      initial="initial"
      animate="animate"
      position="absolute"
      maxWidth="4.3125rem"
      variants={coinsVariants()}
    >
      <FirstCoin maxHeight="2.08238rem" maxWidth="3.55825rem" width="100%" />
    </Motion>
    <Motion
      top="6%"
      left="38%"
      width="100%"
      initial="initial"
      animate="animate"
      maxWidth="5.75rem"
      position="absolute"
      variants={coinsVariants()}
    >
      <SecondCoin maxHeight="2.4615rem" maxWidth="3.65019rem" width="100%" />
    </Motion>
    <Motion
      top="25%"
      left="30%"
      width="100%"
      initial="initial"
      animate="animate"
      position="absolute"
      maxWidth="5.0625rem"
      variants={coinsVariants()}
    >
      <ThirdCoin maxHeight="2rem" maxWidth="3.79931rem" width="100%" />
    </Motion>
    <Motion
      top="35%"
      left="38%"
      width="100%"
      maxWidth="6rem"
      initial="initial"
      animate="animate"
      position="absolute"
      variants={coinsVariants()}
    >
      <FourthCoin maxHeight="3rem" maxWidth="4.79931rem" width="100%" />
    </Motion>
    <Motion
      top="50%"
      left="35%"
      width="100%"
      initial="initial"
      animate="animate"
      position="absolute"
      maxWidth="4.3125rem"
      variants={coinsVariants()}
    >
      <FifthCoin maxHeight="3.6rem" maxWidth="3.6rem" width="100%" />
    </Motion>
    <Box
      bottom="0"
      left="28%"
      width="100%"
      position="absolute"
      maxWidth="7.3125rem"
    >
      <BottomCoin maxHeight="4.03725rem" maxWidth="6.81875rem" width="100%" />
    </Box>
  </Box>
);

export const FarmIllustration: FC = () => (
  <Box
    my="m"
    width="100%"
    height="15rem"
    display="flex"
    position="relative"
    alignItems="center"
    flexDirection="column"
    justifyContent="flex-end"
  >
    <Box width="100%" position="absolute" maxWidth="10rem" mr="-9%">
      <FarmingBase maxHeight="10rem" maxWidth="10rem" width="100%" />
    </Box>
    <Motion
      top="0%"
      width="100%"
      maxWidth="8rem"
      initial="initial"
      animate="animate"
      position="absolute"
      variants={coinsVariants()}
    >
      <FarmingCoin maxHeight="10rem" maxWidth="10rem" width="100%" />
    </Motion>
  </Box>
);

export const DAOIllustration: FC = () => (
  <Motion
    my="m"
    width="100%"
    height="15rem"
    initial="rest"
    animate="rest"
    whileHover="hover"
    position="relative"
  >
    <Motion
      left="33%"
      bottom="26%"
      position="absolute"
      variants={{
        rest: { translateY: '0%', translateX: '0%' },
        hover: { translateX: '-50%' },
      }}
    >
      <DAOUser maxWidth="10rem" maxHeight="10rem" width="100%" />
    </Motion>
    <Motion
      position="absolute"
      left="20%"
      bottom="13%"
      variants={{
        rest: { translateY: '0%', translateX: '0%' },
        hover: { translateY: '50%' },
      }}
    >
      <DAOUser maxWidth="10rem" maxHeight="10rem" width="100%" />
    </Motion>
    <Motion
      position="absolute"
      left="46%"
      bottom="13%"
      variants={{
        rest: { translateY: '0%', translateX: '0%' },
        hover: { translateY: '-50%' },
      }}
    >
      <DAOUser maxWidth="10rem" maxHeight="10rem" width="100%" />
    </Motion>
    <Motion
      position="absolute"
      left="33%"
      bottom="0%"
      variants={{
        rest: { translateY: '0%', translateX: '0%' },
        hover: { translateX: '50%' },
      }}
    >
      <DAOUser maxWidth="10rem" maxHeight="10rem" width="100%" />
    </Motion>
  </Motion>
);
