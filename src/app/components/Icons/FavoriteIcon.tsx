import React from "react";

export default function FavoriteIcon(): JSX.Element {
  return (
    <svg width="56.574" height="51.752" viewBox="0 0 56.574 51.752">
      <defs>
        <filter
          id="Icon_awesome-heart"
          x="0"
          y="0"
          width="56.574"
          height="51.752"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Icon_awesome-heart)">
        <path
          d="M34.829,4.556A10.3,10.3,0,0,0,20.771,5.58L19.287,7.109,17.8,5.58A10.3,10.3,0,0,0,3.744,4.556,10.818,10.818,0,0,0,3,20.218L17.576,35.271a2.362,2.362,0,0,0,3.413,0L35.567,20.218a10.811,10.811,0,0,0-.738-15.663Z"
          transform="translate(9 3.75)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
