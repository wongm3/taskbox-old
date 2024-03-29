import * as React from 'react';

function SvgAtSymbol(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M13.6 13.47A4.99 4.99 0 015 10a5 5 0 018-4V5h2v6.5a1.5 1.5 0 003 0V10a8 8 0 10-4.42 7.16l.9 1.79A10 10 0 1120 10h-.18.17v1.5a3.5 3.5 0 01-6.4 1.97zM10 13a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  );
}

export default SvgAtSymbol;
