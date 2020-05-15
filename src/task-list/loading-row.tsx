import * as React from 'react';

const LoadingRow: React.FC = () => {
  return (
    <div className="loading-item flex h-12 w-full bg-white items-center leading-4 pl-4">
      <span className="glow-item mr-4 w-3 h-3" />
      <span>
        <span className="glow-item">Loading</span>&nbsp;<span className="glow-item">cool</span>&nbsp;
        <span className="glow-item">state</span>
      </span>
    </div>
  );
};

export { LoadingRow };

export default LoadingRow;
