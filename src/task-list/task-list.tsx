import * as React from 'react';
import Task, { TaskInfo } from '../task';
import Checkmark from '../icons/Checkmark';
import Message from '../message';
import { useTasksContext } from '../tasks-context';

export interface TaskListProps {
  loading?: boolean;
  tasks: TaskInfo[];
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
        <Message icon={Checkmark} title="You have no tasks." subtitle="Sit back and relax." />
      </div>
    );
  }

  const sortedTasks: TaskInfo[] = [
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

const TaskListContainer: React.FC = () => {
  const { tasks, archiveTask, pinTask } = useTasksContext();

  return (
    <TaskList
      tasks={tasks.filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')}
      onPinTask={pinTask}
      onArchiveTask={archiveTask}
    />
  );
};

export default TaskListContainer;
