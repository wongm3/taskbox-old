import * as React from 'react';

function SvgNewsPaper(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M16 2h4v15a3 3 0 01-3 3H3a3 3 0 01-3-3V0h16v2zm0 2v13a1 1 0 001 1 1 1 0 001-1V4h-2zM2 2v15a1 1 0 001 1h11.17a2.98 2.98 0 01-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
    </svg>
  );
}

export default SvgNewsPaper;
