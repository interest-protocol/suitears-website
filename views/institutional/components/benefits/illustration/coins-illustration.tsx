import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  BottomCoin,
  FifthCoin,
  FirstCoin,
  FourthCoin,
  SecondCoin,
  ThirdCoin,
} from './illustration-svg';
import { CoinsVariants } from './illustration-variants';

const CoinsIllustration: FC = () => (
  <>
    <Motion
      maxWidth="4.3125rem"
      width="100%"
      right="50%"
      initial="initial"
      animate="animate"
      position="absolute"
      variants={CoinsVariants[0]}
    >
      <FirstCoin maxHeight="2.08238rem" maxWidth="3.55825rem" width="100%" />
    </Motion>
    <Motion
      maxWidth="5.75rem"
      width="100%"
      left="38%"
      top="6%"
      initial="initial"
      animate="animate"
      position="absolute"
      variants={CoinsVariants[0]}
    >
      <SecondCoin maxHeight="2.4615rem" maxWidth="3.65019rem" width="100%" />
    </Motion>
    <Motion
      maxWidth="5.0625rem"
      width="100%"
      top="25%"
      left="30%"
      initial="initial"
      animate="animate"
      position="absolute"
      variants={CoinsVariants[1]}
    >
      <ThirdCoin maxHeight="2rem" maxWidth="3.79931rem" width="100%" />
    </Motion>
    <Motion
      maxWidth="6rem"
      width="100%"
      top="35%"
      left="38%"
      initial="initial"
      animate="animate"
      position="absolute"
      variants={CoinsVariants[2]}
    >
      <FourthCoin maxHeight="3rem" maxWidth="4.79931rem" width="100%" />
    </Motion>
    <Motion
      maxWidth="4.3125rem"
      width="100%"
      top="50%"
      left="35%"
      initial="initial"
      animate="animate"
      position="absolute"
      variants={CoinsVariants[0]}
    >
      <FifthCoin maxHeight="3.6rem" maxWidth="3.6rem" width="100%" />
    </Motion>
    <Motion
      maxWidth="7.3125rem"
      width="100%"
      bottom="-5%"
      left="28%"
      initial="initial"
      animate="animate"
      position="absolute"
      variants={CoinsVariants[1]}
    >
      <BottomCoin maxHeight="4.03725rem" maxWidth="6.81875rem" width="100%" />
    </Motion>
  </>
);

export default CoinsIllustration;
