import * as React from 'react';

function SvgStepForward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
    </svg>
  );
}

export default SvgStepForward;
