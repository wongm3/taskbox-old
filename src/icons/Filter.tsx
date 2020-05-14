import * as React from 'react';

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z" />
    </svg>
  );
}

export default SvgFilter;
