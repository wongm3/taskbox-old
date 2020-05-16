import * as React from 'react';

type LoadingRowProps = {
  firstRow?: boolean;
};

const LoadingRow = (props: LoadingRowProps) => {
  const { firstRow = false } = props;

  return (
    <div
      className="loading-item flex h-12 w-full bg-white items-center leading-4 pl-4"
      aria-live="polite"
      role="progressbar"
      aria-busy="true"
      aria-valuetext="Loading..."
      aria-hidden={!firstRow}
    >
      <span className="glow-item mr-4 w-3 h-3" />
      <span>
        <span className="glow-item" aria-hidden>
          Loading
        </span>
        &nbsp;
        <span className="glow-item" aria-hidden>
          saved
        </span>
        &nbsp;
        <span className="glow-item" aria-hidden>
          task.
        </span>
      </span>
    </div>
  );
};

export { LoadingRow };

export default LoadingRow;
