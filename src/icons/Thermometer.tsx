import * as React from 'react';

function SvgThermometer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9 11.17V7h2v4.17a3 3 0 11-2 0zm-1-.63a4 4 0 104 0V4a2 2 0 10-4 0v6.53zM6 9.53V4a4 4 0 018 0v5.53A5.99 5.99 0 0110 20 6 6 0 016 9.53z" />
    </svg>
  );
}

export default SvgThermometer;
