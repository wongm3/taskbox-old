import * as React from 'react';

function SvgReply(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M15 17v-2.99A4 4 0 0011 10H8v5L2 9l6-6v5h3a6 6 0 016 6v3h-2z" />
    </svg>
  );
}

export default SvgReply;
