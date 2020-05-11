import * as React from 'react';

function SvgBuoy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M17.16 6.42a8.03 8.03 0 00-3.58-3.58l-1.34 2.69a5.02 5.02 0 012.23 2.23l2.69-1.34zm0 7.16l-2.69-1.34a5.02 5.02 0 01-2.23 2.23l1.34 2.69a8.03 8.03 0 003.58-3.58zM6.42 2.84a8.03 8.03 0 00-3.58 3.58l2.69 1.34a5.02 5.02 0 012.23-2.23L6.42 2.84zM2.84 13.58a8.03 8.03 0 003.58 3.58l1.34-2.69a5.02 5.02 0 01-2.23-2.23l-2.69 1.34zM10 20a10 10 0 110-20 10 10 0 010 20zm0-7a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  );
}

export default SvgBuoy;
