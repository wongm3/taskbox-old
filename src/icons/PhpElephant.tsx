import * as React from 'react';

function SvgPhpElephant(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M10 12v8A10 10 0 018.17.17L10 2h5a5 5 0 015 4.99v9.02A4 4 0 0116 20v-2a2 2 0 100-4h-4l-2-2zm5.5-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      />
    </svg>
  );
}

export default SvgPhpElephant;
