import * as React from 'react';

function SvgGift(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M14.83 4H20v6h-1v10H1V10H0V4h5.17A3 3 0 0110 .76 3 3 0 0114.83 4zM8 10H3v8h5v-8zm4 0v8h5v-8h-5zM8 6H2v2h6V6zm4 0v2h6V6h-6zM8 4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

export default SvgGift;
