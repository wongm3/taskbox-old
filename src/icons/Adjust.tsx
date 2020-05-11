import * as React from 'react';

function SvgAdjust(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 2v16a8 8 0 100-16zm0 18a10 10 0 110-20 10 10 0 010 20z" />
    </svg>
  );
}

export default SvgAdjust;
