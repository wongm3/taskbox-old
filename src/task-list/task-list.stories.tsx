import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import TaskList from '.';
import { TaskProps } from '../task';
import { taskData, actionsData } from '../task/task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story) => <div className="p-12">{story()}</div>] as DecoratorFn[],
  excludeStories: /.*Data$/,
};

export const defaultTasksData: TaskProps[] = [
  { ...taskData, ...actionsData, id: '1', title: 'Task 1' } as TaskProps,
  { ...taskData, ...actionsData, id: '2', title: 'Task 2' } as TaskProps,
  { ...taskData, ...actionsData, id: '3', title: 'Task 3' } as TaskProps,
  { ...taskData, ...actionsData, id: '4', title: 'Task 4' } as TaskProps,
  { ...taskData, ...actionsData, id: '5', title: 'Task 5' } as TaskProps,
  { ...taskData, ...actionsData, id: '6', title: 'Task 6' } as TaskProps,
];

export const withPinnedTasksData: TaskProps[] = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED', ...actionsData },
];

export const Default = () => <TaskList tasks={defaultTasksData} {...actionsData} />;

export const WithPinnedTasks = () => <TaskList tasks={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <TaskList loading tasks={[]} {...actionsData} />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;
