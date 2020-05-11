import * as React from 'react';

function SvgDialPad(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M5 4a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zM5 9a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zM5 14a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm5-6a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  );
}

export default SvgDialPad;
