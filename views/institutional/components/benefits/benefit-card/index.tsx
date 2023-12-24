import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BenefitCardProps } from './benefit-card.types';

const BenefitCard: FC<BenefitCardProps> = ({ title, description, Icon }) => {
  const theme = useTheme() as Theme;

  return (
    <Box
      p="3xl"
      display="flex"
      minHeight="27rem"
      border="2px solid"
      borderRadius="2rem"
      flexDirection="column"
      borderColor="onPrimary"
      justifyContent="space-between"
      background={`linear-gradient(36deg, ${theme.colors.onPrimary} 2.01%, rgba(255, 255, 255, 0.16) 98.41%)`}
    >
      <Typography
        size="medium"
        fontSize="5xl"
        variant="title"
        fontWeight="700"
        lineHeight="3xl"
      >
        {title}
      </Typography>
      {Icon}
      <Typography variant="body" size="large">
        {description}
      </Typography>
    </Box>
  );
};

export default BenefitCard;
