import * as React from 'react';

function SvgAttachment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M15 3H7a7 7 0 100 14h8v-2H7A5 5 0 017 5h8a3 3 0 010 6H7a1 1 0 010-2h8V7H7a3 3 0 100 6h8a5 5 0 000-10z" />
    </svg>
  );
}

export default SvgAttachment;
