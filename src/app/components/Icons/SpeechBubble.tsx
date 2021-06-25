import React from "react";

type SpeechProps = {
  speech: string;
};

function SpeechBubble({ speech }: SpeechProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="281.122"
      height="188.742"
      viewBox="0 0 281.122 188.742"
    >
      <g transform="translate(0.498 0.5)">
        <path
          d="M621.381,44.69c23.112-4.046,62.143-5.007,62.143-5.007h62.138c28.116,0,34.534-.142,59.056,8.257,12.506,4.284,15.163,6.567,19.652,10.117C828.23,61.1,837.813,76.6,837.813,76.6s16.679,23.246-5.357,43.919c-8.77,8.228-7.506,12.25-22.184,19.531s-14.769,4.207-36.529,9.593c-36.146,8.946-53.351,7.936-82.334,7.936s-41.2.543-52.308,8.874-4.016,18.082,0,33.325,16.066,27.648,16.066,27.648-22.064-4.6-33.785-19.843-13.1-41.13-13.1-41.13-26.46-1.422-35.28-22.1c-4.5-10.544-9.821-21.656-9.19-32.053.577-9.519,1.781-16.079,4-26.306,4.519-20.871,20.939-27.94,20.939-27.94S598.269,48.735,621.381,44.69Z"
          transform="translate(-563.759 -39.682)"
          fill="var(--background-color)"
          stroke="var(--primary-text-color)"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <text
          transform="matrix(0.998, -0.07, 0.07, 0.998, 140.54, 70.083)"
          fill="var(--primary-text-color)"
          fontSize="28"
          fontFamily="var(--secondary-font-family)"
          letterSpacing="0.03em"
        >
          <tspan textAnchor="middle">{speech}</tspan>
        </text>
      </g>
    </svg>
  );
}

export default SpeechBubble;
