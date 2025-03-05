import { FC } from "react";

type MetricsProps = {
  label: string;
  percentage: number;
};

const Metrics: FC<MetricsProps> = (props) => {
  const { label, percentage } = props;

  return (
    <div className="metrics-container">
      <div className="performance-container">
        <svg
          className="circle"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="15.915"
            stroke="#e6e6e6"
            strokeWidth="3"
            fill="#E5FAEF"
          />
          <circle
            cx="18"
            cy="18"
            r="15.915"
            stroke="#00CB63"
            strokeWidth="3"
            fill="none"
            strokeDasharray="100, 100"
            strokeDashoffset={`calc(100 - ${percentage})`}
          />
        </svg>
        <span
          className="percentage"
          style={{ left: percentage === 100 ? "12px" : "16px" }}
        >
          {percentage}
        </span>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Metrics;
