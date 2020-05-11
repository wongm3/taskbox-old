import * as React from 'react';

function SvgArrowThickUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" />
    </svg>
  );
}

export default SvgArrowThickUp;
