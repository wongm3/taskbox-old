import * as React from 'react';

function SvgRadio(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M20 9v9a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h13.8L.74 1.97 1.26.03 20 5.06V9zm-5 9a3 3 0 100-6 3 3 0 000 6zM2 8v2h16V8H2zm1.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5-1a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  );
}

export default SvgRadio;
