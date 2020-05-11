import * as React from 'react';

function SvgPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M4 4l12 6-12 6z" />
    </svg>
  );
}

export default SvgPlay;
