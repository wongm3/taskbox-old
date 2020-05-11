import * as React from 'react';

function SvgApparel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 01-6 0z" />
    </svg>
  );
}

export default SvgApparel;
