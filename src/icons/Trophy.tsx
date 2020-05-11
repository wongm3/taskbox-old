import * as React from 'react';

function SvgTrophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M15 9a3 3 0 003-3h2a5 5 0 01-5.1 5 5 5 0 01-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 015.1 11H5a5 5 0 01-5-5h2a3 3 0 003 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z" />
    </svg>
  );
}

export default SvgTrophy;
