import * as React from 'react';

function SvgThumbsDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M11 20a2 2 0 01-2-2v-6H2a2 2 0 01-2-2V8l2.3-6.12A3.11 3.11 0 015 0h8a2 2 0 012 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
    </svg>
  );
}

export default SvgThumbsDown;
