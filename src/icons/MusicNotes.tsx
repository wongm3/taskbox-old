import * as React from 'react';

function SvgMusicNotes(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M20 2.5V0L6 2v12.17A3 3 0 005 14H3a3 3 0 000 6h2a3 3 0 003-3V5.71L18 4.3v7.88a3 3 0 00-1-.17h-2a3 3 0 000 6h2a3 3 0 003-3V2.5z" />
    </svg>
  );
}

export default SvgMusicNotes;
