import * as React from 'react';

function SvgIndentDecrease(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM5 6v8l-4-4 4-4z" />
    </svg>
  );
}

export default SvgIndentDecrease;
