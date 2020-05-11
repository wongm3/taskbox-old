import * as React from 'react';

function SvgChartPie(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M19.95 11A10 10 0 119 .05V11h10.95zm-.08-2.6H11.6V.13a10 10 0 018.27 8.27z" />
    </svg>
  );
}

export default SvgChartPie;
