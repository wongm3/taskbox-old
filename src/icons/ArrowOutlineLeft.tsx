import * as React from 'react';

function SvgArrowOutlineLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm2 0a8 8 0 1016 0 8 8 0 00-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z" />
    </svg>
  );
}

export default SvgArrowOutlineLeft;
