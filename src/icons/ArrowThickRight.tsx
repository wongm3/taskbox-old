import * as React from 'react';

function SvgArrowThickRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
    </svg>
  );
}

export default SvgArrowThickRight;
