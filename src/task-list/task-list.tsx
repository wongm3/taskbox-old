import * as React from 'react';
import Task, { TaskProps } from '../task';
import Checkmark from '../icons/Checkmark';

export interface TaskListProps {
  loading?: boolean;
  tasks: TaskProps[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = (props) => {
  const { loading = false, tasks, onPinTask, onArchiveTask } = props;
  const events = { onPinTask, onArchiveTask };

  const LoadingRow = (
    <div className="loading-item flex h-12 w-full bg-white items-center leading-4 pl-4">
      <span className="glow-item mr-4 w-3 h-3" />
      <span>
        <span className="glow-item">Loading</span>&nbsp;<span className="glow-item">cool</span>&nbsp;
        <span className="glow-item">state</span>
      </span>
      {/* <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span> */}
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="absolute top-1/2 right-0 bottom-auto left-0 w-auto h-auto transform -translate-y-1/2 text-center">
          <Checkmark className="w-12 h-12 fill-current text-primary mx-auto my-4" />
          <div className="font-extrabold text-gray-700">You have no tasks.</div>
          <div className="text-sm leading-5 text-gray-600">Sit back and relax.</div>
        </div>
      </div>
    );
  }

  const sortedTasks: TaskProps[] = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {sortedTasks.map((task) => {
        return <Task key={task.id} {...task} {...events} />;
      })}
    </div>
  );
};
