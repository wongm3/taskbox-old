import * as React from 'react';

function SvgTime(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z" />
    </svg>
  );
}

export default SvgTime;
