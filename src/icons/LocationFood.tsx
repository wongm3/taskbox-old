import * as React from 'react';

function SvgLocationFood(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M18 11v7a2 2 0 01-4 0v-5h-2V3a3 3 0 013-3h3v11zM4 10a2 2 0 01-2-2V1a1 1 0 012 0v4h1V1a1 1 0 012 0v4h1V1a1 1 0 012 0v7a2 2 0 01-2 2v8a2 2 0 01-4 0v-8z" />
    </svg>
  );
}

export default SvgLocationFood;
