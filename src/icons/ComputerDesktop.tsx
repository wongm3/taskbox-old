import * as React from 'react';

function SvgComputerDesktop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M7 17H2a2 2 0 01-2-2V2C0 .9.9 0 2 0h16a2 2 0 012 2v13a2 2 0 01-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" />
    </svg>
  );
}

export default SvgComputerDesktop;
