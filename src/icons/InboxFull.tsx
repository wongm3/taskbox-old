import * as React from 'react';

function SvgInboxFull(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M14 14h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 2h12v2H4V4zm0 3h12v2H4V7zm0 3h12v2H4v-2z" />
    </svg>
  );
}

export default SvgInboxFull;
