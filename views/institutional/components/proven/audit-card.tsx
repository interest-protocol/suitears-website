import {
  Box,
  Button,
  Tag,
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
      border="0.125rem solid"
      justifyContent="space-between"
      borderColor={`${theme.colors.onPrimary}`}
      height={['26.625rem', '26.625rem', 'auto']}
      alignItems={['center', 'center', 'flex-start']}
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      background={`linear-gradient(36deg, ${theme.colors.onPrimary} 2.01%, rgba(255, 255, 255, 0.16) 98.41%)`}
    >
      <Box
        gap="m"
        display="flex"
        maxWidth="100%"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
      >
        <Box
          display="flex"
          minWidth="7.875rem"
          alignItems="center"
          minHeight="7.875rem"
          padding="2.125rem 1.4375rem 2.08619rem 1.4375rem"
        >
          <MoveBitSVG maxWidth="5rem" maxHeight="3.66381rem" width="100%" />
        </Box>
        <Box
          gap="m"
          maxWidth="21.4375rem"
          display="inline-flex"
          flexDirection="column"
          alignItems={['center', 'center', 'flex-start']}
        >
          <Typography
            size="large"
            variant="body"
            fontStyle="normal"
            lineHeight="1.5rem"
            color="#000000B8"
            textAlign={['center', 'center', 'start']}
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
      </Box>

      <Box>
        <Tag px="0" py="0.25rem" size="medium" variant="outline">
          <Typography variant="body" size="medium" fontFamily="Proto">
            Audited
          </Typography>
        </Tag>
      </Box>
    </Box>
  );
};

export default AuditCard;
