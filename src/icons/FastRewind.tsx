import * as React from 'react';

function SvgFastRewind(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z" />
    </svg>
  );
}

export default SvgFastRewind;
