import * as React from 'react';

function SvgDirections(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 0l10 10-10 10L0 10 10 0zM6 10v3h2v-3h3v3l4-4-4-4v3H8a2 2 0 00-2 2z" />
    </svg>
  );
}

export default SvgDirections;
