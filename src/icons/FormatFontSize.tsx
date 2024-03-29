import * as React from 'react';

function SvgFormatFontSize(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z" />
    </svg>
  );
}

export default SvgFormatFontSize;
