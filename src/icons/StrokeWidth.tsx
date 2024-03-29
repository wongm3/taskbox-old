import * as React from 'react';

function SvgStrokeWidth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 0h20v5H0V0zm0 7h20v4H0V7zm0 6h20v3H0v-3zm0 5h20v2H0v-2z" />
    </svg>
  );
}

export default SvgStrokeWidth;
