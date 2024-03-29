import * as React from 'react';

function SvgWrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M6.47 9.8A5 5 0 01.2 3.22l3.95 3.95 2.82-2.83L3.03.41a5 5 0 016.4 6.68l10 10-2.83 2.83L6.47 9.8z" />
    </svg>
  );
}

export default SvgWrench;
