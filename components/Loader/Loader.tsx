export default function Loader({ progress, id }: { progress: number, id: number }) {
  const radius = 100;
  const stroke = 2;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getBorderColorById = (id: number) => {
    switch (id) {
        case 1:
            return "#00CCD6";
        case 2:
            return "#097C69";
        case 3:
            return "#FF4A26";
        case 4:
            return "#6CA5EA";
        case 5:
            return "#96DBEB";
        case 6:
            return "#496D84";
        case 7:
            return "#499439";
        case 8:
            return "#F54700";
        case 9:
            return "#73BD1A";
        case 10:
            return "#D4323D";
        case 11:
            return "#FFFFFF";
        case 12:
            return "#96DBEB";
        case 13:
            return "#E40048";
        default:
            return "black";
    }
  };


  return (
    <svg height={radius * 2} width={radius * 2}>
      <g transform={`rotate(-90 ${radius} ${radius})`}>
        <circle
          className="dark:stroke-white stroke-black opacity-10"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={getBorderColorById(id)}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.1s ease" }}
        />
      </g>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="fill-black dark:fill-white font-medium text-lg"
      >
        {progress}%
      </text>
    </svg>
  );
}
