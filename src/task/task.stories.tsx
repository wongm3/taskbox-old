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

const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX' as TaskInfo['state'],
  },
  actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
  },
  Default = () => <Task {...{ ...object('task', taskData), ...actionsData }} />,
  Pinned = () => <Task {...{ ...taskData, state: 'TASK_PINNED', ...actionsData }} />,
  Archived = () => <Task {...{ ...taskData, state: 'TASK_ARCHIVED', ...actionsData }} />,
  longTitleString =
    "Morty, you know outer space is up right? Well, to be honest, I'm kind of grossed out with the sexual nature of how everything unfolded. I didn't know how sexual dragons were. I kind of just wanted to do some D&D stuff, y'know? Shadow Jacker, you haven't come out of your masturbation cave in eons! You created a day care for my dad?",
  LongTitle = () => <Task {...{ ...taskData, title: longTitleString, ...actionsData }} />;

export { taskData, actionsData, Default, Pinned, Archived, LongTitle };
