import * as React from 'react';

function SvgLockClosed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M4 8V6a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 10-2 0zM7 6v2h6V6a3 3 0 00-6 0z" />
    </svg>
  );
}

export default SvgLockClosed;
