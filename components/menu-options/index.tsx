import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithRef, useRef } from 'react';

import { wrapperVariants } from '@/constants/wrapper-variants';
import useOutsideClickHandler from '@/hooks/use-click-outside-listener-ref';

import { MENU_ITEMS } from '../navbar/navbar.data';
import { AvatarSVG } from '../svg';
import { MenuOptionsProps } from './menu-option.types';
import OptionItem from './option-item';

const MenuOptions: FC<PropsWithRef<MenuOptionsProps>> = ({
  isMenuOpen,
  onOutsideClick,
  accountInfo,
}) => {
  const dropDownRef = useRef<HTMLElement | null>(null);
  useOutsideClickHandler(dropDownRef, onOutsideClick);

  return (
    <Motion
      right="1rem"
      zIndex={4}
      top="5rem"
      width="14.5rem"
      initial="closed"
      borderRadius="s"
      ref={dropDownRef}
      border="1px solid"
      position="absolute"
      bg="lowestContainer"
      variants={wrapperVariants}
      textTransform="capitalize"
      borderColor="outlineVariant"
      animate={isMenuOpen ? 'open' : 'closed'}
      pointerEvents={isMenuOpen ? 'auto' : 'none'}
      boxShadow="0px 2px 4px -2px rgba(13, 16, 23, 0.04), 0px 4px 8px -2px rgba(13, 16, 23, 0.12);"
    >
      <Box
        px="m"
        display="flex"
        py="0.625rem"
        gap="0.625rem"
        alignItems="center"
        borderBottom="0.063rem solid"
        borderBottomColor="outlineVariant"
      >
        <AvatarSVG maxHeight="2rem" maxWidth="2rem" width="100%" />
        <Typography variant="body" size="medium" color="#0D1017">
          {accountInfo}
        </Typography>
      </Box>
      {MENU_ITEMS.map(({ name, path }, index) => (
        <OptionItem key={index} mobileOnly path={path}>
          {name}
        </OptionItem>
      ))}
      <Box
        display="flex"
        height="3.5rem"
        alignItems="center"
        justifyContent="center"
        borderTop="0.063rem solid"
        borderTopColor="outlineVariant"
      >
        <Button variant="filled" py="0.625rem" px="xl">
          <Typography variant="label" size="large">
            Get Started
          </Typography>
        </Button>
      </Box>
    </Motion>
  );
};

export default MenuOptions;
