import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { HowItWorksCardProps } from './how-it-works.types';

const HowItWorksCard: FC<HowItWorksCardProps> = ({
  number,
  description,
  isCentered,
  icon,
  toRevert,
}) => (
  <Box
    width={['100%', '100%', '100%', '75rem']}
    display="flex"
    flexDirection={[
      'column',
      'column',
      'column',
      toRevert ? 'row-reverse' : 'row',
    ]}
    alignItems={[
      'center',
      'center',
      'center',
      isCentered ? 'center' : 'flex-end',
    ]}
    justifyContent="center"
    mb="m"
  >
    <Box
      width={['75%', '75%', '75%', '16.5rem']}
      mx="4xl"
      mt="s"
      pb="4xl"
      display="flex"
      flexDirection={['row', 'column']}
      justifyContent={[
        'center',
        'center',
        'center',
        toRevert ? 'flex-start' : 'flex-end',
      ]}
      alignItems={[
        'center',
        'center',
        'center',
        toRevert ? 'flex-start' : 'flex-end',
      ]}
    >
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="surface"
        bg="#0053DB"
        borderRadius="full"
        width={['2.625rem', '2.625rem', '2.625rem', '3.5rem']}
        height={['2.625rem', '2.625rem', '2.625rem', '3.5rem']}
        fontSize={['2xl', '2xl', '2xl', '6xl']}
        size="small"
        variant="display"
        mb={['0', '0', '0', 'm']}
      >
        {number}
      </Typography>
      <Typography
        size="large"
        variant="body"
        color="outline"
        width={['70%', '70%', '70%', '98%']}
        textAlign={['center', 'center', 'center', toRevert ? 'left' : 'right']}
      >
        {description}
      </Typography>
    </Box>
    {icon}
  </Box>
);
export default HowItWorksCard;
