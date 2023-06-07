import React from "react";

type Props = {
  fill: string;
};

function MonitorMobileIcon({ fill }: Props) {
  const color = fill || "#292D32";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M20.99 9.71c-.34-.14-.79-.21-1.35-.21h-5.28c-1.74 0-2.36.62-2.36 2.38v7.74c0 .58.07 1.03.22 1.38.31.72.97 1 2.14 1h5.28c1.74 0 2.36-.63 2.36-2.38v-7.74c0-1.19-.28-1.86-1.01-2.17zM18 19.75h-2c-.02 0-.05 0-.07-.01a.62.62 0 01-.39-.16.706.706 0 01-.29-.58c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z"
      ></path>
      <path
        fill={color}
        d="M20.99 6.19V7c0 .55-.45 1-1 1h-5.63c-2.56 0-3.86 1.31-3.86 3.88V21c0 .55-.45 1-1 1H7.55c-.4 0-.72-.32-.72-.71 0-.4.32-.71.72-.71H9.5v-3.83H6a4.197 4.197 0 01-3.99-4.19V6.19C2.01 3.88 3.89 2 6.21 2H16.8c2.31 0 4.19 1.88 4.19 4.19z"
      ></path>
    </svg>
  );
}

export default MonitorMobileIcon;
