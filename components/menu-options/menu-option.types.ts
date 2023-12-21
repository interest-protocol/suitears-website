export interface OptionItemProps {
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  mobileOnly?: boolean;
  withSubmenu?: boolean;
  withBorderTop?: boolean;
}

export interface MenuOptionsProps {
  isMenuOpen: boolean;
  onOutsideClick: () => void;
  accountInfo?: string;
}
