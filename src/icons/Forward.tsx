import * as React from 'react';

function SvgForward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z" />
    </svg>
  );
}

export default SvgForward;
