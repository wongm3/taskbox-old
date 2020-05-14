import * as React from 'react';

function SvgUserSolidCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 20a10 10 0 110-20 10 10 0 010 20zM7 6v2a3 3 0 106 0V6a3 3 0 10-6 0zm-3.65 8.44a8 8 0 0013.3 0 15.94 15.94 0 00-13.3 0z" />
    </svg>
  );
}

export default SvgUserSolidCircle;
