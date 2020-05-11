import * as React from 'react';

function SvgArrowThickLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z" />
    </svg>
  );
}

export default SvgArrowThickLeft;
