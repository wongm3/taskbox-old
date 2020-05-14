import * as React from 'react';

function SvgYinYang(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-18a8 8 0 100 16 4 4 0 110-8 4 4 0 100-8zm0 13a1 1 0 100-2 1 1 0 000 2zm0-8a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );
}

export default SvgYinYang;
