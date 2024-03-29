import * as React from 'react';

function SvgFlashlight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M13 7v11a2 2 0 01-2 2H9a2 2 0 01-2-2V7L5 5V3h10v2l-2 2zM9 8v1a1 1 0 102 0V8a1 1 0 00-2 0zM5 0h10v2H5V0z" />
    </svg>
  );
}

export default SvgFlashlight;
