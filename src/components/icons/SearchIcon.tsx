import React from "react";

type Props = {
  fill: string;
};
function SearchIcon({ fill }: Props) {
  const color = fill || "#292D32";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-3-3"
      ></path>
    </svg>
  );
}

export default SearchIcon;
