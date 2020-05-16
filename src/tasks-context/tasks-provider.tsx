import * as React from 'react';
import { TaskInfo } from '../task';
import TasksContext from './tasks-context';

type Action = { type: 'ARCHIVE_TASK'; id: string } | { type: 'PIN_TASK'; id: string };

type State = TaskInfo[];

interface TasksProviderProps {
  loading?: boolean;
  defaultTasks: TaskInfo[];
  children: React.ReactNode;
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'ARCHIVE_TASK':
        return state.map<TaskInfo>((task) => (task.id === action.id ? { ...task, state: 'TASK_ARCHIVED' } : task));
      case 'PIN_TASK':
        return state.map<TaskInfo>((task) => (task.id === action.id ? { ...task, state: 'TASK_PINNED' } : task));
      /* istanbul ignore next this can never happen but switch statements have to have a default case */
      default:
        return state;
    }
  },
  TasksProvider = (props: TasksProviderProps) => {
    const { loading, defaultTasks, children } = props,
      [tasks, dispatch] = React.useReducer(reducer, defaultTasks),
      archiveTask = React.useCallback((id: string) => {
        dispatch({ type: 'ARCHIVE_TASK', id });
      }, []),
      pinTask = React.useCallback((id: string) => {
        dispatch({ type: 'PIN_TASK', id });
      }, []);

    return <TasksContext.Provider value={{ loading, tasks, archiveTask, pinTask }}>{children}</TasksContext.Provider>;
  };

export default TasksProvider;
