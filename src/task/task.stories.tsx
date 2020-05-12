import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Task, { TaskProps } from '.';

export default {
  component: Task,
  title: 'Task',
  parameters: {
    info: { inline: true },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <Task {...({ ...taskData, ...actionsData } as TaskProps)} />;

export const Pinned = () => <Task {...({ ...taskData, state: 'TASK_PINNED', ...actionsData } as TaskProps)} />;

export const Archived = () => <Task {...({ ...taskData, state: 'TASK_ARCHIVED', ...actionsData } as TaskProps)} />;
