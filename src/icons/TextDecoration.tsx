import * as React from 'react';

function SvgTextDecoration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M12 5h-2v12H8V3h8v2h-2v12h-2V5zM8 3a4 4 0 100 8V3z" />
    </svg>
  );
}

export default SvgTextDecoration;
