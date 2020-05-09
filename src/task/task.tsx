import * as React from 'react';

export interface ITaskProps {
  task: {
    id: string;
    title: string;
  };
}

export const Task: React.FC<ITaskProps> = (props) => {
  const {
    task: { title },
  } = props;

  return (
    <div>
      <input type="text" value={title} readOnly />
    </div>
  );
};

export default Task;
