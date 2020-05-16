import * as React from 'react';
import Task, { TaskInfo } from '../task';
import Checkmark from '../icons/Checkmark';
import Message from '../message';
import { useTasksContext } from '../tasks-context';
import { LoadingRow } from './loading-row';

export type TaskListProps = {
  loading?: boolean;
  tasks: TaskInfo[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
};

const TaskListComponent = (props: TaskListProps) => {
    const { loading = false, tasks, onPinTask, onArchiveTask } = props;
    let content;

    if (loading) {
      content = (
        <>
          <LoadingRow firstRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
        </>
      );
    } else if (tasks.length === 0) {
      content = (
        <Message
          icon={Checkmark}
          title="You have no tasks."
          subtitle="Sit back and relax."
          aria-label="checkmark icon"
        />
      );
    } else {
      const sortedTasks: TaskInfo[] = [
        ...tasks.filter((t) => t.state === 'TASK_PINNED'),
        ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
      ];

      content = sortedTasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            state={task.state}
            onPinTask={onPinTask}
            onArchiveTask={onArchiveTask}
          />
        );
      });
    }

    return <ul className="relative bg-white min-h-72">{content}</ul>;
  },
  TaskListContainer = () => {
    const { loading, tasks, archiveTask, pinTask } = useTasksContext();

    return (
      <TaskListComponent
        loading={loading}
        tasks={tasks.filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')}
        onPinTask={pinTask}
        onArchiveTask={archiveTask}
      />
    );
  };

export { TaskListComponent };

export default TaskListContainer;
