import * as React from 'react';

function SvgSaveDisk(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z" />
    </svg>
  );
}

export default SvgSaveDisk;
