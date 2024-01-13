import React from 'react';
import './ProgressBar.css';

type ProgressBarProps = {
    progressPercent: number
}


const ProgressBar = ({ progressPercent }: ProgressBarProps) => {
  const strokeDashoffsetValue = `calc(400 - (400 * ${progressPercent}) / 100)`;

  return (
    <div className="relative w-8 h-8">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-border stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        />
        <circle
          className="text-indigo-500 progress-ring__circle stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDashoffset={strokeDashoffsetValue}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
