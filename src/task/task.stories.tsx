import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Task from './task';

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

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;
