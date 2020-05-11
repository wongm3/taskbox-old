import * as React from 'react';

function SvgStandBy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0010 18a7 7 0 004.42-12.42l1.42-1.42a9 9 0 11-11.69 0zM9 0h2v8H9V0z"
      />
    </svg>
  );
}

export default SvgStandBy;
