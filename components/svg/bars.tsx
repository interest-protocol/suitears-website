import { FC } from 'react';

import { SVGProps } from './svg.types';

const Bars: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 14"
    fill="none"
    {...props}
  >
    <path d="M0 0H20V2H0V0Z" fill="currentColor" />
    <path d="M0 6H20V8H0V6Z" fill="currentColor" />
    <path d="M0 12H20V14H0V12Z" fill="currentColor" />
  </svg>
);

export default Bars;
