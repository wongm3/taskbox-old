import * as React from 'react';

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
    </svg>
  );
}

export default SvgHome;
