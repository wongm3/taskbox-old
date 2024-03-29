import * as React from 'react';

function SvgBatteryHalf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7z" />
    </svg>
  );
}

export default SvgBatteryHalf;
