import * as React from 'react';

function SvgStepBackward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
    </svg>
  );
}

export default SvgStepBackward;
