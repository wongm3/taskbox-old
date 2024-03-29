import * as React from 'react';

function SvgVolumeMute(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9 7H5v6h4l5 5V2L9 7z" />
    </svg>
  );
}

export default SvgVolumeMute;
