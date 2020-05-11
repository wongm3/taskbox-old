import * as React from 'react';

function SvgAlbum(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M0 0h20v20H0V0zm10 18a8 8 0 100-16 8 8 0 000 16zm0-5a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

export default SvgAlbum;
