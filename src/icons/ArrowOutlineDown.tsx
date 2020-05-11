import * as React from 'react';

function SvgArrowOutlineDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm-2-8V5h4v5h3l-5 5-5-5h3z" />
    </svg>
  );
}

export default SvgArrowOutlineDown;
