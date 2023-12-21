import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const Copy: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 130 130"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_bd_959_5467)">
      <path
        d="M36 20C36 15.5817 39.5817 12 44 12H86C90.4183 12 94 15.5817 94 20V62C94 66.4183 90.4183 70 86 70H44C39.5817 70 36 66.4183 36 62V20Z"
        fill="white"
        fillOpacity="0.64"
      />
      <path
        d="M37 20C37 16.134 40.134 13 44 13H86C89.866 13 93 16.134 93 20V62C93 65.866 89.866 69 86 69H44C40.134 69 37 65.866 37 62V20Z"
        stroke="white"
        strokeWidth="2"
      />
      <g clipPath="url(#clip0_959_5467)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.9091 32H74V45.0909H69.0909V50H56V36.9091H60.9091V32ZM61 39H58V48H67V45H61V39ZM63 34V43H72V34H63Z"
          fill="#1B1B1F"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_bd_959_5467"
        x="0"
        y="0"
        width="130"
        height="130"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_959_5467"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="10"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_959_5467"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="23" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0509804 0 0 0 0 0.0627451 0 0 0 0 0.0901961 0 0 0 0.16 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_backgroundBlur_959_5467"
          result="effect2_dropShadow_959_5467"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_959_5467"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_959_5467">
        <path
          d="M45 29C45 24.5817 48.5817 21 53 21H77C81.4183 21 85 24.5817 85 29V53C85 57.4183 81.4183 61 77 61H53C48.5817 61 45 57.4183 45 53V29Z"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Copy;
