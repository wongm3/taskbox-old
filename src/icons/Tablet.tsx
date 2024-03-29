import * as React from 'react';

function SvgTablet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 0v14h12V2H4zm6 17a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

export default SvgTablet;
