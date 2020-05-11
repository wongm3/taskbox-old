import * as React from 'react';

function SvgBookmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v18l-8-4-8 4V2z" />
    </svg>
  );
}

export default SvgBookmark;
