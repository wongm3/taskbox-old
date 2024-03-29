import * as React from 'react';

function SvgHourGlass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M3 18a7 7 0 014-6.33V8.33A7 7 0 013 2H1V0h18v2h-2a7 7 0 01-4 6.33v3.34A7 7 0 0117 18h2v2H1v-2h2zM5 2a5 5 0 004 4.9V10h2V6.9A5 5 0 0015 2H5z" />
    </svg>
  );
}

export default SvgHourGlass;
