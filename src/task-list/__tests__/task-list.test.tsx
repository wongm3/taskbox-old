import * as React from 'react';
import { renderWithProvider, screen, within } from 'test-utils';
import TaskList from '../task-list';
import { TaskInfo } from '../../task';

type RenderComponentOptions = {
  loading?: boolean;
  defaultTasks?: TaskInfo[];
  filter?: (tasks: TaskInfo[]) => TaskInfo[];
};

const renderComponent = (options: RenderComponentOptions = {}) => {
  const { loading, defaultTasks, filter } = options,
    utils = renderWithProvider(<TaskList filter={filter} />, { loading, defaultTasks });

  expect(screen.getByRole('list')).toBeInTheDocument();

  return {
    ...utils,
    loading,
    defaultTasks,
  };
};

describe('Task List', () => {
  it('should render loading state', () => {
    renderComponent({ loading: true });

    const loadingBars = screen.getAllByRole('progressbar', { hidden: true }),
      areAriaHidden = loadingBars.map((loadingBar) => {
        return `aria-hidden: ${loadingBar.getAttribute('aria-hidden')}`;
      });

    expect(loadingBars).toHaveLength(6);
    expect(areAriaHidden).toMatchInlineSnapshot(`
      Array [
        "aria-hidden: false",
        "aria-hidden: true",
        "aria-hidden: true",
        "aria-hidden: true",
        "aria-hidden: true",
        "aria-hidden: true",
      ]
    `);
  });

  it('should render empty state', () => {
    renderComponent({ defaultTasks: [] });

    expect(screen.getByLabelText('checkmark icon')).toBeInTheDocument();
    expect(screen.getByText('You have no tasks.')).toBeInTheDocument();
    expect(screen.getByText('Sit back and relax.')).toBeInTheDocument();
  });

  it('should render tasks', () => {
    renderComponent();

    const tasks = screen.getAllByRole('listitem').map((task) => {
      return within(task).getByRole('textbox').getAttribute('value');
    });

    expect(tasks).toMatchInlineSnapshot(`
      Array [
        "Task 1",
        "Task 2",
        "Task 3",
        "Task 4",
        "Task 5",
        "Task 6",
      ]
    `);
  });

  it('should render pinned tasks first and archived tasks last', () => {
    renderComponent({
      defaultTasks: [
        {
          id: '1',
          title: 'Task 1 (archived)',
          state: 'TASK_ARCHIVED',
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
          title: 'Task 6 (pinned)',
          state: 'TASK_PINNED',
        },
      ],
    });

    const tasks = screen.getAllByRole('listitem').map((task) => {
      return within(task).getByRole('textbox').getAttribute('value');
    });

    expect(tasks).toMatchInlineSnapshot(`
      Array [
        "Task 6 (pinned)",
        "Task 2",
        "Task 3",
        "Task 4",
        "Task 5",
        "Task 1 (archived)",
      ]
    `);
  });

  it('should render filtered tasks', () => {
    renderComponent({
      defaultTasks: [
        {
          id: '1',
          title: 'Task 1 (archived)',
          state: 'TASK_ARCHIVED',
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
      filter: (tasks) => tasks.filter((task) => task.state !== 'TASK_ARCHIVED'),
    });

    const tasks = screen.getAllByRole('listitem').map((task) => {
      return within(task).getByRole('textbox').getAttribute('value');
    });

    expect(tasks).toMatchInlineSnapshot(`
      Array [
        "Task 2",
        "Task 3",
        "Task 4",
        "Task 5",
        "Task 6",
      ]
    `);
  });
});
