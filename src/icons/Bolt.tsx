import * as React from 'react';

function SvgBolt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
    </svg>
  );
}

export default SvgBolt;
