import * as React from 'react';

function SvgFormatUnderline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M16 9A6 6 0 114 9V1h3v8a3 3 0 006 0V1h3v8zM2 17h16v2H2v-2z" />
    </svg>
  );
}

export default SvgFormatUnderline;
