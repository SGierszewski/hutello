import React from "react";

export default function NavbarSearchIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="57.999"
      height="58.006"
      viewBox="0 0 57.999 58.006"
    >
      <defs>
        <filter
          id="Icon_awesome-search"
          x="0"
          y="0"
          width="57.999"
          height="58.006"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        transform="matrix(1, 0, 0, 1, 0, 0)"
        filter="url(#Icon_awesome-search)"
      >
        <path
          id="Icon_awesome-search-2"
          data-name="Icon awesome-search"
          d="M39.455,34.587,31.665,26.8a1.874,1.874,0,0,0-1.328-.547H29.064a16.243,16.243,0,1,0-2.813,2.813v1.273a1.874,1.874,0,0,0,.547,1.328l7.789,7.789a1.867,1.867,0,0,0,2.649,0l2.211-2.211A1.884,1.884,0,0,0,39.455,34.587Zm-23.2-8.336a10,10,0,1,1,10-10A9.995,9.995,0,0,1,16.251,26.251Z"
          transform="translate(9 6)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
