import * as React from 'react';

function SvgPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
    </svg>
  );
}

export default SvgPause;
