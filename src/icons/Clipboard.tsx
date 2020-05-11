import * as React from 'react';

function SvgClipboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M7.03 2.6a3 3 0 015.94 0L15 3v1h1a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

export default SvgClipboard;
