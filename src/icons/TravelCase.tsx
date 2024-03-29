import * as React from 'react';

function SvgTravelCase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M14 5h2v14H4V5h2V4a2 2 0 012-2h4a2 2 0 012 2v1zm3 0h1a2 2 0 012 2v10a2 2 0 01-2 2h-1V5zM3 5v14H2a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z" />
    </svg>
  );
}

export default SvgTravelCase;
