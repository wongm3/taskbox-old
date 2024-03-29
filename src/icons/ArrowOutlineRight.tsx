import * as React from 'react';

function SvgArrowOutlineRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-2 0a8 8 0 10-16 0 8 8 0 0016 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
    </svg>
  );
}

export default SvgArrowOutlineRight;
