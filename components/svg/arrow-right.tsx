import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 18 18"
    style={{ maxWidth, maxHeight }}
    fill="none"
    {...props}
  >
    <path
      d="M5.25 4.5H13.5V12.75H12V7.06066L5.25 13.8107L4.18934 12.75L10.9393 6H5.25V4.5Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowRight;
