import * as React from 'react';

function SvgArrowThickDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M7 10V2h6v8h5l-8 8-8-8h5z" />
    </svg>
  );
}

export default SvgArrowThickDown;
