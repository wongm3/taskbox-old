import * as React from 'react';

function SvgAddSolid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 110-20 10 10 0 010 20z" />
    </svg>
  );
}

export default SvgAddSolid;
