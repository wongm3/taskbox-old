import * as React from 'react';

function SvgVolumeDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M7 7H3v6h4l5 5V2L7 7zm8.54 6.54l-1.42-1.42a3 3 0 000-4.24l1.42-1.42a4.98 4.98 0 010 7.08z" />
    </svg>
  );
}

export default SvgVolumeDown;
