import * as React from 'react';

function SvgFormatBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M3 19V1h8a5 5 0 013.88 8.16A5.5 5.5 0 0111.5 19H3zm7.5-8H7v5h3.5a2.5 2.5 0 100-5zM7 4v4h3a2 2 0 100-4H7z" />
    </svg>
  );
}

export default SvgFormatBold;
