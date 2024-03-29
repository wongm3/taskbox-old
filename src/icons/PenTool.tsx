import * as React from 'react';

function SvgPenTool(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 102 0zM6 18h8v2H6v-2z" />
    </svg>
  );
}

export default SvgPenTool;
