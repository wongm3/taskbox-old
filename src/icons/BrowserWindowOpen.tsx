import * as React from 'react';

function SvgBrowserWindowOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2zm8 3l4 5H6l4-5z" />
    </svg>
  );
}

export default SvgBrowserWindowOpen;
