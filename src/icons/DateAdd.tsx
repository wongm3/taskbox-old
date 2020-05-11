import * as React from 'react';

function SvgDateAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M15 2h2a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2v2zM3 6v12h14V6H3zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2h2z" />
    </svg>
  );
}

export default SvgDateAdd;
