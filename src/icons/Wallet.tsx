import * as React from 'react';

function SvgWallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 011 1v1H2v1h17a1 1 0 011 1v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm16.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
}

export default SvgWallet;
