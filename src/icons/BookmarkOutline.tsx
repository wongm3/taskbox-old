import * as React from 'react';

function SvgBookmarkOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z" />
    </svg>
  );
}

export default SvgBookmarkOutline;
