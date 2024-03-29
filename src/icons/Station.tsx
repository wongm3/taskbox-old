import * as React from 'react';

function SvgStation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9 11.73a2 2 0 112 0V20H9v-8.27zm5.24 2.51l-1.41-1.41A3.99 3.99 0 0010 6a4 4 0 00-2.83 6.83l-1.41 1.41a6 6 0 118.49 0zm2.83 2.83l-1.41-1.41a8 8 0 10-11.31 0l-1.42 1.41a10 10 0 1114.14 0z" />
    </svg>
  );
}

export default SvgStation;
