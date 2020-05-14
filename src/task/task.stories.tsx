import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import Task, { TaskInfo } from '.';

export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
} as TaskInfo;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <Task {...{ ...object('task', taskData), ...actionsData }} />;

export const Pinned = () => <Task {...{ ...taskData, state: 'TASK_PINNED', ...actionsData }} />;

export const Archived = () => <Task {...{ ...taskData, state: 'TASK_ARCHIVED', ...actionsData }} />;

const longTitleString =
  "Morty, you know outer space is up right? Well, to be honest, I'm kind of grossed out with the sexual nature of how everything unfolded. I didn't know how sexual dragons were. I kind of just wanted to do some D&D stuff, y'know? Shadow Jacker, you haven't come out of your masturbation cave in eons! You created a day care for my dad?";

export const LongTitle = () => <Task {...{ ...taskData, title: longTitleString, ...actionsData }} />;
