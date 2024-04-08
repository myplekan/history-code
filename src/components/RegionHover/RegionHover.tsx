import React from "react";

type Props = {
  x: number
  y: number
  width: number
  region: string
}

export const RegionHover: React.FC<Props> = ({ x, y, width, region }) => {
  return (
    <>
      <rect
        className="rounded-lg"
        x={`${x - 10}`}
        y={`${y - 50}`}
        rx="4"
        width={width}
        height="45"
        fill="rgb(240, 187, 18)"
      ></rect>
      <path
        transform={`matrix(1 0 0 1 ${region === 'Луганська' ? x + 50 : x} ${y - 10})`}
        d="M9.15879 11.5373C8.36606 12.7142 6.63394 12.7142 5.84121 11.5373L0.506486 3.61732C-0.388328 2.28887 0.563565 0.5 2.16528 0.5L12.8347 0.5C14.4364 0.5 15.3883 2.28887 14.4935 3.61732L9.15879 11.5373Z"
        fill="#F0BB12"
      />
      <text transform={`matrix(1 0 0 1 ${x} ${y - 30})`}>{region}</text>
      <text transform={`matrix(1 0 0 1 ${x} ${y - 15})`}>{region === 'Автономна' ? 'Республіка Крим' : 'область'}</text>
    </>
  );
};
