import * as React from 'react';

function SvgMoodNeutralSolid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 20a10 10 0 110-20 10 10 0 010 20zM6.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 13a1 1 0 000 2h6a1 1 0 000-2H7z" />
    </svg>
  );
}

export default SvgMoodNeutralSolid;
