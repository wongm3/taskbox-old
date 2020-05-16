import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import { TaskListComponent as TaskList } from '.';
import { TaskInfo } from '../task';
import { taskData, actionsData } from '../task/task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story) => <div className="p-12">{story()}</div>] as DecoratorFn[],
  excludeStories: /.*Data$/,
};

const defaultTasksData: TaskInfo[] = [
    { ...taskData, id: '1', title: 'Task 1' },
    { ...taskData, id: '2', title: 'Task 2' },
    { ...taskData, id: '3', title: 'Task 3' },
    { ...taskData, id: '4', title: 'Task 4' },
    { ...taskData, id: '5', title: 'Task 5' },
    { ...taskData, id: '6', title: 'Task 6' },
  ],
  withPinnedTasksData: TaskInfo[] = [
    ...defaultTasksData.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
  Default = () => <TaskList tasks={defaultTasksData} {...actionsData} />,
  WithPinnedTasks = () => <TaskList tasks={withPinnedTasksData} {...actionsData} />,
  Loading = () => <TaskList loading tasks={[]} {...actionsData} />,
  Empty = () => <TaskList tasks={[]} {...actionsData} />;

export { defaultTasksData, withPinnedTasksData, Default, WithPinnedTasks, Loading, Empty };
