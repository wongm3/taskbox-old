import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Task, TaskInfo } from '../task';

interface RenderComponentOptions {
  id?: string;
  title?: string;
  state?: TaskInfo['state'];
}

const renderComponent = (options?: RenderComponentOptions) => {
  const task = {
      id: options?.id || '1',
      title: options?.title || 'Test Task',
      state: options?.state || 'TASK_INBOX',
    },
    onArchiveTask = jest.fn(),
    onPinTask = jest.fn(),
    utils = render(
      <Task id={task.id} title={task.title} state={task.state} onArchiveTask={onArchiveTask} onPinTask={onPinTask} />
    );

  expect(screen.getByRole('listitem')).toBeInTheDocument();

  return {
    ...utils,
    task,
    onArchiveTask,
    onPinTask,
  };
};

describe('Task', () => {
  it('should render task', () => {
    const { task } = renderComponent();

    expect(screen.getByRole('checkbox', { name: `is ${task.title} archived` })).not.toBeChecked();
    expect(screen.getByRole('textbox', { name: task.title })).not.toHaveClass('text-gray-500');
    expect(screen.getByRole('button', { name: `Pin ${task.title}` })).toHaveClass('text-gray-300');
  });

  it('should render archived task', () => {
    const { task } = renderComponent({ state: 'TASK_ARCHIVED' });

    expect(screen.getByRole('checkbox', { name: `is ${task.title} archived` })).toBeChecked();
    expect(screen.getByRole('textbox', { name: task.title })).toHaveClass('text-gray-500');
    expect(screen.queryByRole('button', { name: `Pin ${task.title}` })).not.toBeInTheDocument();
  });

  it('should render pinned task', () => {
    const { task } = renderComponent({ state: 'TASK_PINNED' });

    expect(screen.getByRole('checkbox', { name: `is ${task.title} archived` })).not.toBeChecked();
    expect(screen.getByRole('textbox', { name: task.title })).not.toHaveClass('text-gray-500');
    expect(screen.getByRole('button', { name: `Pin ${task.title}` })).toHaveClass('text-primary');
  });

  it('should archive task', () => {
    const { task, onArchiveTask } = renderComponent();

    userEvent.click(screen.getByRole('button', { name: `Archive ${task.title}` }));

    expect(onArchiveTask).toHaveBeenCalledWith(task.id);
    expect(onArchiveTask).toHaveBeenCalledTimes(1);
  });

  it('should pin task', () => {
    const { task, onPinTask } = renderComponent();

    userEvent.click(screen.getByRole('button', { name: `Pin ${task.title}` }));

    expect(onPinTask).toHaveBeenCalledWith(task.id);
    expect(onPinTask).toHaveBeenCalledTimes(1);
  });
});
