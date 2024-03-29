import * as React from 'react';

function SvgPlaylist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M16 17a3 3 0 01-3 3h-2a3 3 0 010-6h2a3 3 0 011 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z" />
    </svg>
  );
}

export default SvgPlaylist;
