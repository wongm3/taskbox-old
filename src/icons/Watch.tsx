import * as React from 'react';

function SvgWatch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M11 9h2v2H9V7h2v2zm-5.82 6.08a6.98 6.98 0 010-10.16L6 0h8l.82 4.92a6.98 6.98 0 010 10.16L14 20H6l-.82-4.92zM10 15a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
  );
}

export default SvgWatch;
