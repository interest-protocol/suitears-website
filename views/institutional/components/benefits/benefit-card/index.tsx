import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BenefitCardProps } from './benefit-card.types';

const BenefitCard: FC<BenefitCardProps> = ({ title, description, Icon }) => {
  const theme = useTheme() as Theme;

  return (
    <Box
      p="2.5rem"
      display="flex"
      minHeight="27rem"
      borderRadius="2rem"
      flexDirection="column"
      justifyContent="space-between"
      border={`2px solid ${theme.colors.onPrimary}`}
      background={`linear-gradient(36deg, ${theme.colors.onPrimary} 2.01%, rgba(255, 255, 255, 0.16) 98.41%)`}
    >
      <Typography
        variant="title"
        size="medium"
        fontSize="2rem"
        fontWeight="700"
        lineHeight="2.5rem"
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
