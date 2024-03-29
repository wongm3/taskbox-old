import * as React from 'react';

function SvgRepost(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M5 4a2 2 0 00-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 01-2 2H6l2-2h7V8z" />
    </svg>
  );
}

export default SvgRepost;
