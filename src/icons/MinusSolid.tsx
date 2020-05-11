import * as React from 'react';

function SvgMinusSolid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm5-11H5v2h10V9z" />
    </svg>
  );
}

export default SvgMinusSolid;
