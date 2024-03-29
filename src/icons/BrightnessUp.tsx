import * as React from 'react';

function SvgBrightnessUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 14a4 4 0 110-8 4 4 0 010 8zM9 1a1 1 0 112 0v2a1 1 0 11-2 0V1zm6.65 1.94a1 1 0 111.41 1.41l-1.4 1.4a1 1 0 11-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 110 2h-1.98a1 1 0 110-2h1.98zm-1.93 6.65a1 1 0 11-1.41 1.41l-1.4-1.4a1 1 0 111.41-1.41l1.4 1.4zM11 18.99a1 1 0 11-2 0v-1.98a1 1 0 112 0v1.98zm-6.65-1.93a1 1 0 11-1.41-1.41l1.4-1.4a1 1 0 111.41 1.41l-1.4 1.4zM1.01 11a1 1 0 110-2h1.98a1 1 0 110 2H1.01zm1.93-6.65a1 1 0 111.41-1.41l1.4 1.4a1 1 0 11-1.41 1.41l-1.4-1.4z" />
    </svg>
  );
}

export default SvgBrightnessUp;
