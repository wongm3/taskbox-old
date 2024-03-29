import * as React from 'react';

function SvgCreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm4 8h4v2H4v-2z" />
    </svg>
  );
}

export default SvgCreditCard;
