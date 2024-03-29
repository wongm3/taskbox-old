import * as React from 'react';

function SvgVector(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M12 4h4.27a2 2 0 110 2h-2.14a9 9 0 014.84 7.25 2 2 0 11-2 .04 7 7 0 00-4.97-6V8H8v-.71a7 7 0 00-4.96 6 2 2 0 11-2-.04A9 9 0 015.86 6H3.73a2 2 0 110-2H8V3h4v1z" />
    </svg>
  );
}

export default SvgVector;
