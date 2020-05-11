import * as React from 'react';

function SvgQueue(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 2h20v4H0V2zm0 8h20v2H0v-2zm0 6h20v2H0v-2z" />
    </svg>
  );
}

export default SvgQueue;
