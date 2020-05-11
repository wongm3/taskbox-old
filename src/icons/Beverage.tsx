import * as React from 'react';

function SvgBeverage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1l5-1zm2-10a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

export default SvgBeverage;
