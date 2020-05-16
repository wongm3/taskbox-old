import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TasksContext } from '../tasks-context';
import { defaultTasksData } from '../task-list/task-list.stories';
import InboxScreen from '.';

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [
    (story) => (
      <TasksContext.Provider
        value={{ loading: false, tasks: defaultTasksData, pinTask: action('pin'), archiveTask: action('archive') }}
      >
        {story()}
      </TasksContext.Provider>
    ),
  ] as DecoratorFn[],
};

const Default = () => <InboxScreen />,
  Error = () => <InboxScreen error="Something" />;

export { Default, Error };
