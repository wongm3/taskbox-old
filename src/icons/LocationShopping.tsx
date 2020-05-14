import * as React from 'react';

function SvgLocationShopping(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1112 0zm-2 0a4 4 0 10-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
    </svg>
  );
}

export default SvgLocationShopping;
