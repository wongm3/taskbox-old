import * as React from 'react';

function SvgEditCrop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M14 16H6a2 2 0 01-2-2V6H0V4h4V0h2v14h14v2h-4v4h-2v-4zm0-3V6H7V4h7a2 2 0 012 2v7h-2z" />
    </svg>
  );
}

export default SvgEditCrop;
