import * as React from 'react';

function SvgUserAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 016 0v2a3 3 0 01-6 0V6zm11 9.14A15.93 15.93 0 0012 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
    </svg>
  );
}

export default SvgUserAdd;
