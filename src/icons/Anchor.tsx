import * as React from 'react';

function SvgAnchor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M4.34 15.66A7.97 7.97 0 009 17.94V10H5V8h4V5.83a3 3 0 112 0V8h4v2h-4v7.94a7.97 7.97 0 004.66-2.28l-1.42-1.42h5.66l-2.83 2.83a10 10 0 01-14.14 0L.1 14.24h5.66l-1.42 1.42zM10 4a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

export default SvgAnchor;
