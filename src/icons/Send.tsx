import * as React from 'react';

function SvgSend(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z" />
    </svg>
  );
}

export default SvgSend;
