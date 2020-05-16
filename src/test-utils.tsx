import * as React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { TasksProvider } from './tasks-context';
import { TaskInfo } from './task';

type CustomOptions = {
  loading?: boolean;
  defaultTasks?: TaskInfo[];
} & RenderOptions;

type CustomResult = {
  defaultTasks: TaskInfo[];
} & RenderResult;

const renderWithProvider = (ui: React.ReactNode, options: CustomOptions = {}): CustomResult => {
  const {
      loading,
      defaultTasks = [
        {
          id: '1',
          title: 'Task 1',
          state: 'TASK_INBOX',
        },
        {
          id: '2',
          title: 'Task 2',
          state: 'TASK_INBOX',
        },
        {
          id: '3',
          title: 'Task 3',
          state: 'TASK_INBOX',
        },
        {
          id: '4',
          title: 'Task 4',
          state: 'TASK_INBOX',
        },
        {
          id: '5',
          title: 'Task 5',
          state: 'TASK_INBOX',
        },
        {
          id: '6',
          title: 'Task 6',
          state: 'TASK_INBOX',
        },
      ],
      ...renderOptions
    } = options,
    utils = render(
      <TasksProvider loading={loading} defaultTasks={defaultTasks}>
        {ui}
      </TasksProvider>,
      renderOptions
    );

  return {
    ...utils,
    defaultTasks,
  };
};

export * from '@testing-library/react';
export { renderWithProvider };
