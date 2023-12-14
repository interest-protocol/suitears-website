import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowRightSVG, MoveBitSVG } from '@/components/svg';

const AuditCard: FC = () => {
  const theme = useTheme() as Theme;

  return (
    <Box
      padding="3xl"
      display="flex"
      maxWidth="100%"
      width="44.25rem"
      borderRadius="2rem"
      justifyContent="space-between"
      height={['26.625rem', '26.625rem', 'auto']}
      flexDirection={['column', 'column', 'row']}
      alignItems={['center', 'center', 'flex-start']}
      border={`0.063rem solid ${theme.colors.onPrimary}`}
      background={`linear-gradient(36deg, ${theme.colors.onPrimary} 2.01%, rgba(255, 255, 255, 0.16) 98.41%)`}
    >
      <Box
        display="flex"
        width="7.875rem"
        height="7.875rem"
        alignItems="center"
        justifyContent="center"
        padding="2.125rem 1.4375rem 2.08619rem 1.4375rem"
      >
        <MoveBitSVG maxWidth="5rem" maxHeight="5rem" width="100%" />
      </Box>
      <Box
        gap="m"
        maxWidth="100%"
        width="21.4375rem"
        display="inline-flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Typography
          size="large"
          variant="body"
          fontWeight="500"
          fontStyle="normal"
          lineHeight="1.5rem"
          color="#000000B8"
          textAlign={['center', 'start']}
        >
          MOVEBIT, a third-party blockchain security company focused on Move
          ecosystem security which helped us keep our protocol secured.
        </Typography>
        <Button
          variant="outline"
          SuffixIcon={
            <ArrowRightSVG
              width="100%"
              maxWidth="1.125rem"
              maxHeight="1.125rem"
            />
          }
          pr="m"
          pl="xl"
          pt="0.625rem"
          pb="0.625rem"
          borderRadius="xs"
          border={`0.063rem solid ${theme.colors.outlineVariant}`}
        >
          Read Audit
        </Button>
      </Box>
      <Box>
        <Button
          py="2xs"
          fontSize="s"
          px="0.625rem"
          gap="0.375rem"
          variant="outline"
          border={`0.063rem solid ${theme.colors.outlineVariant}`}
        >
          Audited
        </Button>
      </Box>
    </Box>
  );
};

export default AuditCard;
