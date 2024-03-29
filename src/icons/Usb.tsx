import * as React from 'react';

function SvgUsb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M15 8v2h-4V4h2l-3-4-3 4h2v8H5V9.73a2 2 0 10-2 0V12a2 2 0 002 2h4v2.27a2 2 0 102 0V12h4a2 2 0 002-2V8h1V4h-4v4h1z" />
    </svg>
  );
}

export default SvgUsb;
