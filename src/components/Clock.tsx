function radianToDegree(value: number) {
  return value * (180 / Math.PI);
}

function degreeToRadian(value: number) {
  return value * (Math.PI / 180);
}

function asin(value: number) {
  return radianToDegree(Math.asin(value));
}

function sin(degree: number) {
  return Math.sin(degreeToRadian(degree));
}

function cos(degree: number) {
  return Math.cos(degreeToRadian(degree));
}

const R1 = 205;
const R2 = 145;
const R1_5 = (R1 + R2) / 2 - 30;
const R3 = 134;
const R4 = 60;
const theta1 = asin(R4 / R1);
const theta2 = asin(R4 / R2);
const theta3 = asin(R4 / R3);

const outerWhite = `
  M ${R1 * cos(theta1)} ${R1 * sin(theta1)}
  A ${R1} ${R1} 0 1 1 ${R1 * cos(-theta1)} ${R1 * sin(-theta1)}
  L ${R2 * cos(-theta2)} ${R2 * sin(-theta2)}
  A ${R2} ${R2} 0 1 0 ${R2 * cos(theta2)} ${R2 * sin(theta2)}
  Z
`;
const innerWhite = `
  M ${R3 * cos(theta3)} ${R3 * sin(theta3)}
  A ${R3} ${R3} 0 1 1 ${R3 * cos(-theta3)} ${R3 * sin(-theta3)}
  L 0 ${-R4}
  A ${R4 - 4} ${R4} 0 1 0 0 ${R4}
  Z
`;
const white = `
  ${outerWhite}
  ${innerWhite}
`;
const black = `
  M ${R1 * cos(theta1)} ${R1 * sin(theta1)}
  L ${R2 * cos(theta2)} ${R2 * sin(theta2)}
  A ${R2} ${R2} 0 1 1 ${R2 * cos(-theta2)} ${R2 * sin(-theta2)}
  L ${R1 * cos(-theta1)} ${R1 * sin(-theta1)}
  A ${R1} ${R1} 0 0 1 ${R1 * cos(theta1)} ${R1 * sin(theta1)}
  Z
  ${innerWhite}
`;

const hours = [
  { hour: 1, label: "Ⅰ" },
  { hour: 2, label: "Ⅱ" },
  { hour: 3, label: "Ⅲ" },
  { hour: 4, label: "Ⅳ" },
  { hour: 5, label: "Ⅴ" },
  { hour: 6, label: "Ⅵ" },
  { hour: 7, label: "Ⅶ" },
  { hour: 8, label: "Ⅷ" },
  { hour: 9, label: "Ⅸ" },
  { hour: 10, label: "Ⅹ" },
  { hour: 11, label: "Ⅺ" },
  { hour: 12, label: "Ⅻ" },
];

function ClockLabel({
  className,
  clipPath,
}: {
  readonly className: string;
  readonly clipPath: string;
}) {
  return (
    <g className={className} clipPath={clipPath}>
      {hours.map(({ hour, label }) => {
        const degree = hour * 30 - 90;
        const x = (R1 - 120) * cos(degree);
        const y = (R1 - 120) * sin(degree);
        return (
          <text
            key={hour}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-roboto"
            fontSize={250}
            transform={`rotate(${degree + 90}, ${x}, ${y})`}
          >
            {label}
          </text>
        );
      })}
    </g>
  );
}

function Clock() {
  return (
    <svg className="size-full bg-gray-900" viewBox="-205 -205 410 410">
      <defs>
        <clipPath id="whiteClip">
          <path d={white} className="fill-transparent"></path>
        </clipPath>
        <clipPath id="blackClip">
          <path
            d={black}
            clipRule="evenodd"
            className="fill-transparent"
          ></path>
        </clipPath>
      </defs>
      <ClockLabel className="fill-gray-100" clipPath="url(#whiteClip)" />
      <ClockLabel className="fill-gray-500" clipPath="url(#blackClip)" />
    </svg>
  );
}

export default Clock;
