import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'test-utils';
import { useTasksContext, TasksProvider, TasksContextValue } from '..';
import { TaskInfo } from '../../task/task';

const renderComponent = () => {
  let context: TasksContextValue = {
    tasks: [],
    pinTask: jest.fn().mockName('pinTask'),
    archiveTask: jest.fn().mockName('archiveTask'),
  };
  const Component = () => {
      context = useTasksContext();
      const { tasks, pinTask, archiveTask } = context;
      return (
        <div>
          {tasks.map((task) => {
            return (
              <React.Fragment key={task.id}>
                <div>{`${task.title}: ${task.state}`}</div>
                <button
                  type="button"
                  onClick={() => {
                    pinTask(task.id);
                  }}
                >{`Pin ${task.title}`}</button>
                <button
                  type="button"
                  onClick={() => {
                    archiveTask(task.id);
                  }}
                >{`Archive ${task.title}`}</button>
              </React.Fragment>
            );
          })}
        </div>
      );
    },
    loading = false,
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
    ] as TaskInfo[],
    utils = render(
      <TasksProvider loading={loading} defaultTasks={defaultTasks}>
        <Component />
      </TasksProvider>
    );

  return {
    ...utils,
    defaultTasks,
    loading,
    context,
  };
};

describe('Tasks Provider', () => {
  it('should return tasks context values', () => {
    const { defaultTasks, loading, context } = renderComponent();

    expect(context.tasks).toStrictEqual(defaultTasks);
    expect(context.loading).toStrictEqual(loading);
  });

  it('should pin task', async () => {
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: 'Pin Task 3' }));

    await waitFor(() => {
      expect(screen.getByText('Task 3: TASK_PINNED')).toBeInTheDocument();
    });
  });

  it('should archive task', async () => {
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: 'Archive Task 3' }));

    await waitFor(() => {
      expect(screen.getByText('Task 3: TASK_ARCHIVED')).toBeInTheDocument();
    });
  });
});
