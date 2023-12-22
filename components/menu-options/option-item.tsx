import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { CircleSVG } from '../svg';
import { OptionItemProps } from './menu-option.types';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const OptionItem: FC<PropsWithChildren<OptionItemProps>> = ({
  path,
  disabled,
  children,
  selected,
  mobileOnly,
  withBorderTop,
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <Link href={path}>
      <Motion
        p="m"
        alignItems="center"
        borderTop="1px solid"
        variants={itemVariants}
        initial={itemVariants.closed}
        justifyContent="space-between"
        cursor={disabled ? 'not-allowed' : 'pointer'}
        bg={selected ? 'rgba(0, 83, 219, 0.08)' : 'unset'}
        nHover={{ bg: disabled ? 'unset' : `${colors.primary}14` }}
        borderColor={withBorderTop ? 'outlineVariant' : 'transparent'}
        display={mobileOnly ? ['flex', 'flex', 'flex', 'flex', 'none'] : 'flex'}
      >
        <Typography variant="body" size="large">
          {children}
        </Typography>
        {selected && (
          <Box color="primary">
            <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
          </Box>
        )}
      </Motion>
    </Link>
  );
};

export default OptionItem;
