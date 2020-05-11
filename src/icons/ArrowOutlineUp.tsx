import * as React from 'react';

function SvgArrowOutlineUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 0a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm2 8v5H8v-5H5l5-5 5 5h-3z" />
    </svg>
  );
}

export default SvgArrowOutlineUp;
