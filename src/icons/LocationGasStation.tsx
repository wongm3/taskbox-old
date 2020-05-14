import * as React from 'react';

function SvgLocationGasStation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M13 18h1v2H0v-2h1V2c0-1.1.9-2 2-2h8a2 2 0 012 2v16zM3 2v6h8V2H3zm10 8h1a2 2 0 012 2v3a1 1 0 002 0v-5l-2-2V6l-2-2 1-1 5 5v7a3 3 0 01-6 0v-3h-1v-2z" />
    </svg>
  );
}

export default SvgLocationGasStation;
