import * as React from 'react';

function SvgZoomIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z"
      />
    </svg>
  );
}

export default SvgZoomIn;
