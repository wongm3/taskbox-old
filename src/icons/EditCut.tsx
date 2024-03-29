import * as React from 'react';

function SvgEditCut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9.77 11.5l5.34 3.91c.44.33 1.24.59 1.79.59H20L6.89 6.38A3.5 3.5 0 105.5 8.37L7.73 10 5.5 11.63a3.5 3.5 0 101.38 1.99l2.9-2.12zM3.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM15.1 4.59A3.53 3.53 0 0116.9 4H20l-7.5 5.5L10.45 8l4.65-3.41z" />
    </svg>
  );
}

export default SvgEditCut;
