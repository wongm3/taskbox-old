import * as React from 'react';
import { renderWithProvider, screen, within } from 'test-utils';
import InboxScreen from '..';

describe('Inbox Screen', () => {
  it('should render with title and no archived tasks', () => {
    renderWithProvider(<InboxScreen />, {
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
    });

    expect(screen.getByText(/inbox/i)).toBeInTheDocument();
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

  it('should render error state', () => {
    renderWithProvider(<InboxScreen error="There was a an error" />);

    expect(screen.getByLabelText('sad face icon')).toBeInTheDocument();
    expect(screen.getByText('Oh no!')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });
});
