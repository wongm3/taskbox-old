import * as React from 'react';

function SvgKey(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 114 4zm4.86-4.62A3 3 0 0015 2a3 3 0 00-2.12.88l4.24 4.24z" />
    </svg>
  );
}

export default SvgKey;
