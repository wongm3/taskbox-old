import * as React from 'react';

function SvgLocationRestroom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M12 16H9l2-4.5V9c0-1.1.9-2 2-2h2a2 2 0 012 2v2.5l2 4.5h-3v4h-4v-4zm-5-3h2V9a2 2 0 00-2-2H3a2 2 0 00-2 2v4h2v7h4v-7zM5 6a3 3 0 110-6 3 3 0 010 6zm9 0a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

export default SvgLocationRestroom;
