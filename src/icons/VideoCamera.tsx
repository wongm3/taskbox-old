import * as React from 'react';

function SvgVideoCamera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M16 7l4-4v14l-4-4v3a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h12a2 2 0 012 2v3zm-8 7a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  );
}

export default SvgVideoCamera;
