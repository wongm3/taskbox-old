import * as React from 'react';

function SvgRefresh(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 3v2a5 5 0 00-3.54 8.54l-1.41 1.41A7 7 0 0110 3zm4.95 2.05A7 7 0 0110 17v-2a5 5 0 003.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z" />
    </svg>
  );
}

export default SvgRefresh;
