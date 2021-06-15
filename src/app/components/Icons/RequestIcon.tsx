import React from "react";

export default function RequestIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
    >
      <path
        d="M27.3,3H5.7A2.7,2.7,0,0,0,3.013,5.7L3,30l5.4-5.4H27.3A2.708,2.708,0,0,0,30,21.9V5.7A2.708,2.708,0,0,0,27.3,3ZM24.6,19.2H8.4V16.5H24.6Zm0-4.05H8.4v-2.7H24.6Zm0-4.05H8.4V8.4H24.6Z"
        transform="translate(-3 -3)"
        fill="var(--button-icon-color)"
      />
    </svg>
  );
}
