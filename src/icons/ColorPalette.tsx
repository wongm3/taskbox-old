import * as React from 'react';

function SvgColorPalette(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 01-2 2H9zm0-3.34V5.34l2.08-2.07a1.99 1.99 0 012.82 0l2.83 2.83a2 2 0 010 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zM4 17a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

export default SvgColorPalette;
