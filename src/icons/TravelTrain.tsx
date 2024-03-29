import * as React from 'react';

function SvgTravelTrain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M12 18H8l-2 2H3l2-2a2 2 0 01-2-2V2c0-1.1.9-2 2-2h10a2 2 0 012 2v14a2 2 0 01-2 2l2 2h-3l-2-2zM5 5v6h10V5H5zm1.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 2v1h4V2H8z" />
    </svg>
  );
}

export default SvgTravelTrain;
