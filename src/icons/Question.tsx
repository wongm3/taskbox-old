import * as React from 'react';

function SvgQuestion(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 10-8 0h2a2 2 0 114 0zm-3 8v2h2v-2H9z" />
    </svg>
  );
}

export default SvgQuestion;
