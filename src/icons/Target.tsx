import * as React from 'react';

function SvgTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M17.94 11H13V9h4.94A8 8 0 0011 2.06V7H9V2.06A8 8 0 002.06 9H7v2H2.06A8 8 0 009 17.94V13h2v4.94A8 8 0 0017.94 11zM10 20a10 10 0 110-20 10 10 0 010 20z" />
    </svg>
  );
}

export default SvgTarget;
