import * as React from 'react';
import Task, { TaskInfo } from '../task';
import Checkmark from '../icons/Checkmark';
import Message from '../message';
import { useTasksContext } from '../tasks-context';
import { LoadingRow } from './loading-row';

export interface TaskListProps {
  loading?: boolean;
  tasks: TaskInfo[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = (props) => {
  const { loading = false, tasks, onPinTask, onArchiveTask } = props;
  const events = { onPinTask, onArchiveTask };
  let content;

  if (loading) {
    content = (
      <>
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
      </>
    );
  } else if (tasks.length === 0) {
    content = <Message icon={Checkmark} title="You have no tasks." subtitle="Sit back and relax." />;
  } else {
    const sortedTasks: TaskInfo[] = [
      ...tasks.filter((t) => t.state === 'TASK_PINNED'),
      ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
    ];

    content = sortedTasks.map((task) => {
      return <Task key={task.id} {...task} {...events} />;
    });
  }

  return <div className="relative bg-white min-h-72">{content}</div>;
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
