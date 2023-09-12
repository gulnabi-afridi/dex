import React from "react";

interface Props {
  fill?: string;
  stroke?: string;
  className?: string;
}

export const SolapeCoin: React.FC<Props> = ({
  fill,
  stroke,
  className = "w-[24px] h-[24px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
  >
    <circle cx="12" cy="12" r="12" fill="#090B0B" />
    <path
      d="M19.9848 7.54077C18.8219 6.53417 17.5477 6.52906 16.1983 6.77943C16.232 6.6568 16.2553 6.5725 16.2501 6.59038C15.4757 6.87652 14.678 7.20353 13.8596 7.4539C13.5436 7.55099 13.1733 7.46668 12.8262 7.46923C12.6501 7.47179 12.474 7.4769 12.2979 7.48967C11.394 7.55354 10.4772 7.74259 9.58881 7.65573C8.67456 7.56631 7.7888 7.21375 6.88492 6.85608C6.96003 6.95316 7.03513 7.0528 7.15427 7.20353C5.77643 7.13455 4.48405 7.18565 3.50247 8.26377C3.35743 7.57909 3.68635 6.77177 4.37268 6.21993C5.88779 5.0013 7.46765 5.22101 9.09672 6.03854C8.9724 5.90569 8.84809 5.77284 8.72377 5.63999C8.76262 5.57612 8.76003 5.58123 8.79888 5.51481C9.2573 5.63999 9.74161 5.71408 10.1715 5.90569C11.2023 6.36556 12.1606 6.29147 13.1267 5.73197C13.5074 5.51225 13.9528 5.39729 14.3672 5.23634C14.4113 5.2951 14.4061 5.28743 14.4501 5.34619L14.0331 5.87759C15.4964 4.89655 17.0141 4.44435 18.6613 5.41262C19.4228 5.86737 19.889 6.53162 19.9848 7.54077Z"
      fill="url(#paint0_linear_21_621)"
    />
    <path
      d="M14.7143 9.42619L15.4835 9.38787C15.0432 9.12473 14.6107 8.86669 14.217 8.63165C15.1365 8.71596 16.0637 8.79771 16.9624 8.87946C16.9701 8.86925 16.8976 8.96888 16.8225 9.06597C16.864 9.12473 16.9468 9.14005 17.0064 9.09918C17.4052 8.8207 17.8067 8.53968 18.19 8.27142C18.3609 8.83603 18.1952 9.32145 17.6798 9.65612C16.9183 10.1518 15.5068 10.0496 14.7143 9.42619Z"
      fill="url(#paint1_linear_21_621)"
    />
    <path
      d="M5.26883 8.89478C5.74279 9.16814 6.19085 9.42873 6.6415 9.68932C6.69071 9.62034 6.68035 9.52581 6.61819 9.46705C6.56639 9.41595 6.52495 9.38019 6.51977 9.37252C7.38222 9.22179 8.29905 9.06339 9.15632 8.91266C9.07862 8.98419 8.91805 9.15536 8.73416 9.29588C8.53474 9.44661 8.3146 9.5718 7.98049 9.7864C8.36898 9.74297 8.61503 9.71487 8.87661 9.68421C8.31978 10.3791 6.68553 10.632 5.94999 10.2488C5.39574 9.95502 5.15488 9.4926 5.26883 8.89478Z"
      fill="url(#paint2_linear_21_621)"
    />
    <path
      d="M12.7537 17.0421C12.7537 17.0421 16.0378 16.2859 17.9362 14.6943C17.7186 14.1808 17.3612 13.6647 17.4053 13.795C16.9883 12.7501 16.5221 12.5278 16.2864 12.4946C15.8953 12.9187 15.5405 13.3019 15.1857 13.6851C15.1054 13.6213 15.1391 13.6468 15.0588 13.5829C15.108 13.5139 15.1598 13.4475 15.209 13.3785C16.0637 12.2136 15.8358 10.9617 14.6133 10.1825C14.1963 9.91679 13.7664 9.66642 13.3261 9.43394C12.8185 9.16568 12.3238 9.34963 12.1037 9.87081C12.013 10.0829 11.9483 10.3051 11.8317 10.6372C11.71 10.3767 11.6349 10.2183 11.5624 10.0599C11.2412 9.35985 10.7414 9.22444 10.1017 9.67153C9.77014 9.90402 9.43604 10.1314 9.11489 10.3741C7.91834 11.2759 7.76554 12.5457 8.71086 13.7107C8.82223 13.8486 8.94136 13.984 9.05791 14.122C9.01129 14.1731 9.02424 14.1578 8.98021 14.2063C8.58136 13.9329 8.1851 13.657 7.77071 13.3709C7.0015 14.4873 6.62078 15.6881 6.57935 16.9757L6.68294 17.0549C6.68553 17.0575 9.66655 17.9159 12.7537 17.0421ZM14.6314 11.5008C13.5333 12.7603 12.9324 12.8804 12.3135 11.9504C13.1086 11.9095 13.712 11.1533 14.6314 11.5008ZM11.4717 11.9913C10.9822 12.9877 10.2829 12.9085 9.15115 11.7639C10.0006 11.3219 10.6818 12.0271 11.4717 11.9913Z"
      fill="url(#paint3_linear_21_621)"
    />
    <path
      d="M17.4956 16.3139C15.6697 16.8581 14.3022 17.1289 13.1601 17.2873C11.5724 17.6526 9.79314 17.9132 7.95947 17.9158C7.91026 17.9286 7.85846 17.9388 7.80666 17.9516C7.12551 18.1457 7.27832 18.0384 6.78882 18.3118L9.5471 18.4906C9.62997 18.4957 9.64552 18.6081 9.57041 18.6362C9.1353 18.8023 8.74422 18.953 8.30652 19.1216C9.13012 20.049 10.0107 20.6801 11.1399 20.887C12.6654 21.168 14.1313 20.9075 15.5247 20.2969C16.2835 19.9647 17.1382 19.0527 17.4516 18.2964C17.8634 17.3001 18.4979 16.015 17.4956 16.3139Z"
      fill="url(#paint4_linear_21_621)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_21_621"
        x1="3.46875"
        y1="4.875"
        x2="14.1641"
        y2="14.6394"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD499D" />
        <stop offset="1" stop-color="#FF810A" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_21_621"
        x1="14.217"
        y1="8.27142"
        x2="18.2179"
        y2="10.053"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD499D" />
        <stop offset="1" stop-color="#FF810A" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_21_621"
        x1="5.24121"
        y1="8.89478"
        x2="9.02387"
        y2="10.7045"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD499D" />
        <stop offset="1" stop-color="#FF810A" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_21_621"
        x1="6.57935"
        y1="9.3114"
        x2="19.1981"
        y2="12.6162"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD499D" />
        <stop offset="1" stop-color="#FF810A" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_21_621"
        x1="6.78882"
        y1="16.2699"
        x2="17.9293"
        y2="21.2301"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD499D" />
        <stop offset="1" stop-color="#FF810A" />
      </linearGradient>
    </defs>
  </svg>
);

export const UsdCoin: React.FC<Props> = ({
  fill,
  stroke,
  className = "w-[24px] h-[24px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
  >
    <g clip-path="url(#clip0_21_617)">
      <path
        d="M12 24C18.65 24 24 18.65 24 12C24 5.34996 18.65 0 12 0C5.34996 0 0 5.34996 0 12C0 18.65 5.34996 24 12 24Z"
        fill="#2775CA"
      />
      <path
        d="M15.2998 13.8999C15.2998 12.15 14.2498 11.55 12.1498 11.3C10.6498 11.1 10.3498 10.7 10.3498 9.99992C10.3498 9.29984 10.8499 8.84996 11.8498 8.84996C12.7498 8.84996 13.2498 9.14996 13.4998 9.89996C13.5498 10.05 13.6998 10.1499 13.8498 10.1499H14.6498C14.8498 10.1499 14.9998 9.99992 14.9998 9.8V9.74996C14.7998 8.64992 13.8998 7.79996 12.7498 7.7V6.49999C12.7498 6.29995 12.5998 6.14995 12.3499 6.09991H11.5999C11.3998 6.09991 11.2498 6.24991 11.1998 6.49999V7.64996C9.69977 7.85 8.74985 8.84996 8.74985 10.1C8.74985 11.75 9.74981 12.3999 11.8498 12.65C13.2498 12.9 13.6998 13.2 13.6998 14C13.6998 14.8 12.9998 15.35 12.0499 15.35C10.7498 15.35 10.2998 14.7999 10.1498 14.0499C10.0999 13.85 9.94985 13.7499 9.79985 13.7499H8.94977C8.74985 13.7499 8.59985 13.8999 8.59985 14.1V14.15C8.79977 15.3999 9.59981 16.2999 11.2498 16.55V17.75C11.2498 17.9499 11.3998 18.0999 11.6498 18.15H12.3998C12.5998 18.15 12.7498 18 12.7999 17.75V16.55C14.2998 16.2999 15.2998 15.2499 15.2998 13.8999Z"
        fill="white"
      />
      <path
        d="M9.45 19.1499C5.55 17.75 3.54996 13.4 5.00004 9.54992C5.75004 7.44992 7.40004 5.84996 9.45 5.09996C9.65004 5 9.75 4.85 9.75 4.59992V3.89996C9.75 3.69992 9.65004 3.54992 9.45 3.5C9.39996 3.5 9.3 3.5 9.24996 3.54992C4.5 5.04992 1.89996 10.1 3.39996 14.85C4.29996 17.6499 6.45 19.8 9.24996 20.7C9.45 20.7999 9.65004 20.7 9.69996 20.4999C9.75 20.45 9.75 20.4 9.75 20.3V19.5999C9.75 19.4499 9.6 19.25 9.45 19.1499ZM14.75 3.54992C14.55 3.44996 14.35 3.54992 14.3 3.74996C14.25 3.8 14.25 3.84992 14.25 3.95V4.64996C14.25 4.85 14.4 5.04992 14.55 5.15C18.45 6.54992 20.45 10.8999 19 14.75C18.25 16.85 16.6 18.45 14.55 19.2C14.35 19.2999 14.25 19.4499 14.25 19.7V20.4C14.25 20.6 14.35 20.75 14.55 20.7999C14.6 20.7999 14.7 20.7999 14.75 20.75C19.5 19.25 22.1 14.1999 20.6 9.44996C19.7 6.59996 17.5 4.44992 14.75 3.54992Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_21_617">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Link: React.FC<Props> = ({
  fill,
  stroke,
  className = "w-[16px] h-[16px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.7713 4.22879C10.9902 3.44774 9.72389 3.44774 8.94284 4.22879L8.00003 5.1716C7.73968 5.43195 7.31757 5.43194 7.05722 5.1716C6.79687 4.91125 6.79687 4.48914 7.05722 4.22879L8.00003 3.28598C9.30178 1.98423 11.4123 1.98423 12.7141 3.28598C14.0158 4.58772 14.0158 6.69827 12.7141 8.00002L11.7713 8.94283C11.5109 9.20318 11.0888 9.20318 10.8285 8.94283C10.5681 8.68248 10.5681 8.26037 10.8285 8.00002L11.7713 7.05721C12.5523 6.27616 12.5523 5.00983 11.7713 4.22879ZM4.2288 11.7713C3.44775 10.9902 3.44775 9.72388 4.2288 8.94283L5.17161 8.00002C5.43196 7.73967 5.43196 7.31756 5.17161 7.05721C4.91126 6.79686 4.48915 6.79686 4.2288 7.05721L3.28599 8.00002C1.98424 9.30177 1.98424 11.4123 3.28599 12.7141C4.58774 14.0158 6.69829 14.0158 8.00003 12.7141L8.94284 11.7713C9.20319 11.5109 9.20319 11.0888 8.94284 10.8284C8.68249 10.5681 8.26038 10.5681 8.00003 10.8284L7.05722 11.7713C6.27618 12.5523 5.00985 12.5523 4.2288 11.7713ZM10.3571 6.58581C10.6174 6.32546 10.6174 5.90335 10.3571 5.643C10.0967 5.38265 9.6746 5.38265 9.41425 5.643L5.64301 9.41424C5.38266 9.67459 5.38266 10.0967 5.64301 10.357C5.90336 10.6174 6.32547 10.6174 6.58582 10.357L10.3571 6.58581Z"
      fill="#FFAB5C"
    />
  </svg>
);

export const Warning: React.FC<Props> = ({
  fill,
  stroke,
  className = "w-[20px] h-[20px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill={fill}
    stroke={stroke}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334ZM9.99996 3.33335C6.31806 3.33335 3.33329 6.31812 3.33329 10C3.33329 13.6819 6.31806 16.6667 9.99996 16.6667C13.6819 16.6667 16.6666 13.6819 16.6666 10C16.6666 6.31812 13.6819 3.33335 9.99996 3.33335ZM9.99996 8.95835C10.5753 8.95835 11.0416 9.42472 11.0416 10V13.3334C11.0416 13.9087 10.5753 14.375 9.99996 14.375C9.42466 14.375 8.95829 13.9087 8.95829 13.3334V10C8.95829 9.42472 9.42466 8.95835 9.99996 8.95835ZM9.99996 5.83335C9.42466 5.83335 8.95829 6.29972 8.95829 6.87502C8.95829 7.45032 9.42466 7.91669 9.99996 7.91669C10.5753 7.91669 11.0416 7.45032 11.0416 6.87502C11.0416 6.29972 10.5753 5.83335 9.99996 5.83335Z"
      fill="#676767"
    />
  </svg>
);

export const Copy: React.FC<Props> = ({
  fill,
  stroke,
  className = "w-[20px] h-[20px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill={fill}
    stroke={stroke}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.83335 15C5.83335 15.4602 6.20645 15.8333 6.66669 15.8333H15.8334C16.2936 15.8333 16.6667 15.4602 16.6667 15V9.16666C16.6667 8.70642 16.2936 8.33332 15.8334 8.33332V12.5C15.8334 13.8807 14.7141 15 13.3334 15H5.83335ZM15.8334 6.66666C15.8334 5.28595 14.7141 4.16666 13.3334 4.16666H4.16669C2.78598 4.16666 1.66669 5.28594 1.66669 6.66666V12.5C1.66669 13.8807 2.78598 15 4.16669 15C4.16669 16.3807 5.28598 17.5 6.66669 17.5H15.8334C17.2141 17.5 18.3334 16.3807 18.3334 15V9.16666C18.3334 7.78595 17.2141 6.66666 15.8334 6.66666ZM13.3334 13.3333C13.7936 13.3333 14.1667 12.9602 14.1667 12.5L14.1667 6.66666C14.1667 6.20642 13.7936 5.83332 13.3334 5.83332L4.16669 5.83332C3.70645 5.83332 3.33335 6.20642 3.33335 6.66666L3.33335 12.5C3.33335 12.9602 3.70645 13.3333 4.16669 13.3333L13.3334 13.3333ZM13.3334 11.6667C13.3334 11.2064 12.9603 10.8333 12.5 10.8333C12.0398 10.8333 11.6667 11.2064 11.6667 11.6667C11.6667 12.1269 12.0398 12.5 12.5 12.5C12.9603 12.5 13.3334 12.1269 13.3334 11.6667ZM5.00002 6.66666C5.46026 6.66666 5.83335 7.03975 5.83335 7.49999C5.83335 7.96023 5.46026 8.33332 5.00002 8.33332C4.53978 8.33332 4.16669 7.96023 4.16669 7.49999C4.16669 7.03975 4.53978 6.66666 5.00002 6.66666ZM10.8334 9.58332C10.8334 8.66285 10.0872 7.91666 9.16669 7.91666C8.24621 7.91666 7.50002 8.66285 7.50002 9.58332C7.50002 10.5038 8.24621 11.25 9.16669 11.25C10.0872 11.25 10.8334 10.5038 10.8334 9.58332Z"
      fill="#FFFAF5"
    />
  </svg>
);

export const LimitOrder: React.FC<Props> = ({
  fill,
  stroke,
  className = "w-[16px] h-[16px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke={stroke}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.33337 11.9447V13.2921C4.92087 12.9912 3.00876 11.0791 2.70796 8.66659H4.05533C4.33632 10.3416 5.65835 11.6637 7.33337 11.9447ZM5.41737 8.66659C5.65853 9.6037 6.39628 10.3415 7.33337 10.5827V8.66659H5.41737ZM7.33337 7.33326H5.4174C5.65861 6.39622 6.39633 5.65852 7.33337 5.41734V7.33326ZM8.66671 8.66659V10.5827C9.6038 10.3415 10.3415 9.60369 10.5827 8.66659H8.66671ZM10.5827 7.33326H8.66671V5.41734C9.60376 5.65852 10.3415 6.39622 10.5827 7.33326ZM11.9447 8.66659C11.6638 10.3416 10.3417 11.6637 8.66671 11.9447V13.2921C11.0792 12.9912 12.9913 11.0791 13.2921 8.66659H11.9447ZM13.2921 7.33326H11.9447C11.6637 5.65829 10.3417 4.33631 8.66671 4.0553V2.70792C11.0792 3.00875 12.9912 4.92081 13.2921 7.33326ZM4.05536 7.33326H2.70798C3.00884 4.92081 4.92092 3.00875 7.33337 2.70792V4.0553C5.65839 4.33631 4.3364 5.65829 4.05536 7.33326ZM1.33337 8C1.33337 4.3181 4.31814 1.33333 8.00004 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8Z"
      fill={fill}
    />
  </svg>
);

export const MarketOrder: React.FC<Props> = ({
  fill,
  stroke,
  className = "w-[16px] h-[16px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke={stroke}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.00004 13.3333C5.05452 13.3333 2.66671 10.9455 2.66671 8C2.66671 5.05448 5.05452 2.66666 8.00004 2.66666C10.9456 2.66666 13.3334 5.05448 13.3334 8C13.3334 10.9455 10.9456 13.3333 8.00004 13.3333ZM1.33337 8C1.33337 4.3181 4.31814 1.33333 8.00004 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8ZM8.00004 10C6.89547 10 6.00004 9.10456 6.00004 8C6.00004 6.89543 6.89547 6 8.00004 6C9.10461 6 10 6.89543 10 8C10 9.10456 9.10461 10 8.00004 10ZM4.66671 8C4.66671 6.15905 6.15909 4.66666 8.00004 4.66666C9.84099 4.66666 11.3334 6.15905 11.3334 8C11.3334 9.84094 9.84099 11.3333 8.00004 11.3333C6.15909 11.3333 4.66671 9.84094 4.66671 8Z"
      fill={fill}
    />
  </svg>
);

export const Circle: React.FC<Props> = ({
  fill,
  stroke,
  className = "w-[14px] h-[14px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.8334 6.99999C12.8334 10.2217 10.2217 12.8333 7.00004 12.8333C3.77838 12.8333 1.16671 10.2217 1.16671 6.99999C1.16671 3.77833 3.77838 1.16666 7.00004 1.16666C10.2217 1.16666 12.8334 3.77833 12.8334 6.99999ZM9.86166 3.3134C9.07143 2.69912 8.07845 2.33332 7.00004 2.33332C4.42271 2.33332 2.33337 4.42266 2.33337 6.99999C2.33337 8.07841 2.69917 9.07139 3.31346 9.86162L9.86166 3.3134ZM10.6866 4.13836C11.3009 4.92859 11.6667 5.92157 11.6667 6.99999C11.6667 9.57732 9.57737 11.6667 7.00004 11.6667C5.92163 11.6667 4.92865 11.3009 4.13842 10.6866L10.6866 4.13836Z"
      fill={fill}
    />
  </svg>
);
