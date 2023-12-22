export interface OptionItemProps {
  path: string;
  selected?: boolean;
  disabled?: boolean;
  mobileOnly?: boolean;
  withSubmenu?: boolean;
  withBorderTop?: boolean;
}

export interface MenuOptionsProps {
  isMenuOpen: boolean;
  onOutsideClick: () => void;
  accountInfo?: string;
}
