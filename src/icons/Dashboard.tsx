import * as React from 'react';

function SvgDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm-5.6-4.29a9.95 9.95 0 0111.2 0 8 8 0 10-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 11-1.41-1.41z" />
    </svg>
  );
}

export default SvgDashboard;
