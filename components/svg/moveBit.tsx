import { FC } from 'react';

import { SVGProps } from './svg.types';

const MoveBit: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 80 59"
    fill="none"
    {...props}
  >
    <path
      d="M11.4972 52.6755V49.2592V43.1365H8.61415L5.7662 49.481L2.8831 43.1365H0V58.5542H2.8831V49.7251L5.7662 56.0918L8.61415 49.7251V58.5542H11.4972V52.6755Z"
      fill="#1B1B1F"
    />
    <path
      d="M23.1923 54.6055C23.1923 51.3888 23.1923 48.1722 23.1923 44.9555C23.1923 44.1125 22.2782 43.3805 20.9772 43.1808C20.3444 43.0921 19.7115 43.1365 19.0786 43.1365C18.4457 43.1365 17.8129 43.1143 17.2151 43.1586C16.0197 43.2252 15.0001 43.7354 14.6836 44.4453C14.4727 44.9333 14.5782 46.6415 14.5782 47.0852C14.5782 50.324 14.5782 53.5407 14.5782 56.7573C14.5782 57.6003 15.4923 58.3324 16.8284 58.532C17.4613 58.6208 18.059 58.5764 18.6919 58.5764C19.3247 58.5764 19.9576 58.5986 20.5905 58.5542C21.8914 58.4876 22.9462 57.8665 23.1571 57.0457C23.2275 56.7573 23.1923 54.8939 23.1923 54.6055ZM20.3092 56.7573H17.4613V44.9555H20.3092V56.7573Z"
      fill="#1B1B1F"
    />
    <path
      d="M37.4667 43.0922H34.6187L31.7356 53.3854L28.8525 43.0922H25.9694L30.2941 58.5321H33.1772L37.4667 43.0922Z"
      fill="#1B1B1F"
    />
    <path
      d="M49.0099 56.7351H43.2437V51.7438H48.2715V49.9247H43.2437V44.9333H49.0099V43.1143H43.2437H40.3606V58.5542H43.2437H49.0099V56.7351Z"
      fill="#1B1B1F"
    />
    <path
      d="M60.5918 53.5851V52.4537C60.5918 51.4554 59.3261 50.6346 57.7439 50.6346C59.3261 50.6346 60.5918 49.836 60.5918 48.8377V44.9556C60.5918 43.9573 59.3261 43.1587 57.7439 43.1587H54.8608H51.9777V58.5764H54.8608H57.7439C59.3261 58.5764 60.5918 57.7556 60.5918 56.7574V53.5851ZM57.9864 56.7574H54.3757V51.766H57.9864V56.7574ZM57.9864 49.6142H54.3757V44.9556H57.9864V49.6142Z"
      fill="#1B1B1F"
    />
    <path
      d="M67.585 43.1143H64.8425V58.5098H67.585V43.1143Z"
      fill="currentColor"
    />
    <path
      d="M80 43.1808H71.3858V45.2425H74.2338V58.6207H77.1169V45.2425H80V43.1808Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5951 15.8579L14.6081 15.8585C15.024 15.929 13.2387 19.6057 13.4137 22.8363C13.5886 26.0669 14.7429 28.3895 16.2815 30.0962C17.8201 31.8029 21.7634 33.6477 21.9856 33.7052C22.2079 33.7628 20.632 34.4291 19.0748 34.4334C17.5175 34.4377 16.0908 33.6462 14.925 32.9656C13.7592 32.2849 12.7455 31.0287 12.1447 29.4673C11.5438 27.906 11.1208 25.2668 11.5711 22.9759C12.0123 20.7294 14.1061 15.9828 14.5811 15.8602L14.5951 15.8579ZM23.0668 12.7114C25.4356 12.7085 28.2318 13.3489 29.9611 13.8151C33.1648 14.696 36.265 15.9194 39.2084 17.4645C40.4589 18.1151 41.9122 18.8954 43.3654 19.6871L43.4801 19.7496L43.7669 19.9022L44.197 20.131L44.4838 20.2821L44.7706 20.4346C47.5424 21.9211 50.1951 23.3544 51.5702 24.0322C53.1256 24.7996 56.1191 26.1216 60.5509 27.9981C60.7282 28.5763 60.8718 29.1645 60.9811 29.7595C61.1 30.5722 61.0815 31.3992 60.9266 32.2058C60.7832 32.9382 60.0576 34.288 59.5902 34.406C59.1274 34.5229 54.7717 32.4085 52.9858 31.3888L52.9325 31.3582L52.7475 31.2503L52.6658 31.2014C52.2497 30.9485 51.69 30.5866 51.0323 30.1487L50.9218 30.075C49.7919 29.3207 48.3895 28.3545 46.935 27.3363L46.8527 27.2786L46.6806 27.1577L46.5099 27.0383L46.3379 26.9174L46.1658 26.7965L45.9034 26.6109L45.641 26.4267L45.5105 26.3346L45.2467 26.1547C44.0264 25.2913 42.8291 24.4336 41.7823 23.6753C38.0441 20.967 32.6497 16.555 27.9092 14.549C23.216 12.5631 20.1855 13.3415 18.6157 13.4969L18.5686 13.5014V13.5C17.0114 13.6424 20.698 12.7143 23.0668 12.7114ZM45.2022 0.495563C47.7761 1.14024 52.1911 3.8528 54.0624 5.50335C55.9337 7.1539 58.9119 10.0463 60.6355 12.1905C62.3591 14.3346 64.9903 17.7695 66.1532 20.3022C67.3161 22.8349 68.6755 26.8195 68.7429 28.578C68.8103 30.3365 67.98 32.5598 66.6235 33.4059C65.7192 33.97 64.01 34.2842 61.4958 34.3485C62.3734 33.0198 62.761 31.7597 62.6587 30.5682C62.5053 28.7867 61.7884 25.9029 61.0485 24.0926C60.4126 22.4952 59.6271 20.962 58.7026 19.5136C57.8178 18.1178 56.328 15.8441 54.5442 13.7216C52.7604 11.599 49.699 8.56414 47.4922 6.98122C45.2854 5.3983 42.0691 3.77509 39.7261 3.67148C38.0435 3.61453 36.3618 3.80851 34.736 4.24709C35.8966 2.27947 37.2024 1.04719 38.6535 0.550246C40.8273 -0.199483 42.6283 -0.149117 45.2022 0.495563ZM28.2045 18.1754L32.0532 20.7944C31.0284 23.4134 30.2159 25.2553 29.6155 26.3202C28.715 27.9175 27.4015 29.9077 26.4738 30.8517C25.5461 31.7957 24.2326 32.8332 23.5242 33.0102C22.8159 33.1872 16.5468 28.2197 16.8838 28.1362C17.7418 27.8593 18.5863 27.5418 19.4144 27.1848L19.5695 27.1174L19.6928 27.0642C20.2582 26.8213 20.8105 26.549 21.3475 26.2482C22.8646 25.369 24.409 23.5429 25.493 22.219C26.2157 21.3364 27.1195 19.9885 28.2045 18.1754ZM39.1138 5.06733C39.5337 5.10028 39.9462 5.19733 40.3369 5.35513C39.1192 6.0651 38.0716 7.03482 37.2683 8.19575C36.5254 9.28245 35.8725 10.4284 35.3162 11.622L35.2609 11.7415L31.5413 10.4795L31.5742 10.3802C32.0742 8.87018 32.611 7.79091 33.1845 7.14239C34.057 6.16326 35.2194 5.66829 36.2746 5.39945L36.3191 5.38823H36.3177C37.3845 5.12057 38.4528 5.02128 39.1138 5.06733Z"
      fill="currentColor"
    />
  </svg>
);

export default MoveBit;
