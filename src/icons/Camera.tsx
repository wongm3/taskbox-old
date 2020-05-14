import * as React from 'react';

function SvgCamera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm10 10a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

export default SvgCamera;
