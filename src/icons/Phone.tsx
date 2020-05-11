import * as React from 'react';

function SvgPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M20 18.35V19a1 1 0 01-1 1h-2A17 17 0 010 3V1a1 1 0 011-1h4a1 1 0 011 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 01.99 1v3.35z" />
    </svg>
  );
}

export default SvgPhone;
