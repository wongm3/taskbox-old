import * as React from 'react';

function SvgPauseSolid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM7 6v8h2V6H7zm4 0v8h2V6h-2z" />
    </svg>
  );
}

export default SvgPauseSolid;
