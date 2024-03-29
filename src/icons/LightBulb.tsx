import * as React from 'react';

function SvgLightBulb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M7 13.33a7 7 0 116 0V16H7v-2.67zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 017 18.5V17zm2-5.1V14h2v-2.1a5 5 0 10-2 0z" />
    </svg>
  );
}

export default SvgLightBulb;
