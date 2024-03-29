import * as React from 'react';

function SvgMobileDevices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 01-2-2V8a2 2 0 012-2h6zm-5.75 14H3a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v4a2 2 0 012 2v10a2 2 0 01-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

export default SvgMobileDevices;
