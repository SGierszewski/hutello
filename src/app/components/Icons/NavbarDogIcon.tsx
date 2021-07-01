import React from "react";

export default function NavbarDogIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="58.271"
      height="55.754"
      viewBox="0 0 58.271 55.754"
    >
      <defs>
        <filter
          id="Icon_awesome-dog"
          x="0"
          y="0"
          width="58.271"
          height="55.754"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Icon_awesome-dog)">
        <path
          id="Icon_awesome-dog-2"
          data-name="Icon awesome-dog"
          d="M39.013,7.284H33.979l-.563-1.126a2.517,2.517,0,0,0-2.251-1.391H26.947L24.8,2.621a1.259,1.259,0,0,0-2.149.89V15.3l10.068,3.6v-2.8h2.517a5.033,5.033,0,0,0,5.034-5.034V8.542A1.258,1.258,0,0,0,39.013,7.284ZM30.2,11.059A1.258,1.258,0,1,1,31.462,9.8,1.258,1.258,0,0,1,30.2,11.059ZM7.551,17.352a2.52,2.52,0,0,1-2.517-2.517,2.517,2.517,0,1,0-5.034,0,7.538,7.538,0,0,0,5.034,7.087V38.746A1.258,1.258,0,0,0,6.292,40h5.034a1.258,1.258,0,0,0,1.258-1.258V29.936H25.169v8.809A1.258,1.258,0,0,0,26.428,40h5.034a1.258,1.258,0,0,0,1.258-1.258V21.564L20.926,17.352Z"
          transform="translate(9 3.75)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
