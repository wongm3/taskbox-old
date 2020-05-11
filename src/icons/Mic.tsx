import * as React from 'react';

function SvgMic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9 18v-1.06A8 8 0 012 9h2a6 6 0 1012 0h2a8 8 0 01-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 118 0v5a4 4 0 11-8 0V4z" />
    </svg>
  );
}

export default SvgMic;
