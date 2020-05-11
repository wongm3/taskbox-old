import * as React from 'react';

function SvgMouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M4 9V6A6 6 0 019 .08V9H4zm0 2v3a6 6 0 1012 0v-3H4zm12-2V6a6 6 0 00-5-5.92V9h5z" />
    </svg>
  );
}

export default SvgMouse;
