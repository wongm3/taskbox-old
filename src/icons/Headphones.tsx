import * as React from 'react';

function SvgHeadphones(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M16 8A6 6 0 104 8v11H2a2 2 0 01-2-2v-4a2 2 0 012-2V8a8 8 0 1116 0v3a2 2 0 012 2v4a2 2 0 01-2 2h-2V8zm-4 2h3v10h-3V10zm-7 0h3v10H5V10z" />
    </svg>
  );
}

export default SvgHeadphones;
