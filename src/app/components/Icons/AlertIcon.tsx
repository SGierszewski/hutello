import React from "react";

export default function AlertIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
    >
      <g transform="translate(-1.5 -1.5)">
        <path
          d="M33,18A15,15,0,1,1,18,3,15,15,0,0,1,33,18Z"
          fill="none"
          stroke="var(--hint-color)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          d="M18,12v6"
          fill="none"
          stroke="var(--hint-color)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          d="M18,24h0"
          fill="none"
          stroke="var(--hint-color)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  );
}
