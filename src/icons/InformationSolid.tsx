import * as React from 'react';

function SvgInformationSolid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM9 11v4h2V9H9v2zm0-6v2h2V5H9z" />
    </svg>
  );
}

export default SvgInformationSolid;
