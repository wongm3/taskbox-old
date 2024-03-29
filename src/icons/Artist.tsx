import * as React from 'react';

function SvgArtist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M15.75 8l-3.74-3.75a3.99 3.99 0 016.82-3.08A4 4 0 0115.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z" />
    </svg>
  );
}

export default SvgArtist;
