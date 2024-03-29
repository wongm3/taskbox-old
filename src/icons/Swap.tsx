import * as React from 'react';

function SvgSwap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9 6a4 4 0 118 0v8h3l-4 4-4-4h3V6a2 2 0 00-2-2 2 2 0 00-2 2v8a4 4 0 11-8 0V6H0l4-4 4 4H5v8a2 2 0 002 2 2 2 0 002-2V6z" />
    </svg>
  );
}

export default SvgSwap;
