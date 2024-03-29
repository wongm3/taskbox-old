import * as React from 'react';

function SvgShoppingCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M4 2h16l-3 9H4a1 1 0 100 2h13v2H4a3 3 0 010-6h.33L3 5 2 2H0V0h3a1 1 0 011 1v1zm1 18a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  );
}

export default SvgShoppingCart;
