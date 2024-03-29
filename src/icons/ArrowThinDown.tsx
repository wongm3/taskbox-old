import * as React from 'react';

function SvgArrowThinDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l.707-.707 7.778-7.778-1.414-1.414L11 16.172V0H9z" />
    </svg>
  );
}

export default SvgArrowThinDown;
