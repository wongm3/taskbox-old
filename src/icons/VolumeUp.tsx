import * as React from 'react';

function SvgVolumeUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M5 7H1v6h4l5 5V2L5 7zm11.36 9.36l-1.41-1.41a6.98 6.98 0 000-9.9l1.41-1.41a8.97 8.97 0 010 12.72zm-2.82-2.82l-1.42-1.42a3 3 0 000-4.24l1.42-1.42a4.98 4.98 0 010 7.08z" />
    </svg>
  );
}

export default SvgVolumeUp;
