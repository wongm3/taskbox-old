import * as React from 'react';
import { TaskInfo } from '../task';

interface TasksContextValue {
  tasks: TaskInfo[];
  archiveTask: (id: string) => void;
  pinTask: (id: string) => void;
}

export const TasksContext = React.createContext<TasksContextValue | undefined>(undefined);

export const useTasksContext = () => {
  const context = React.useContext(TasksContext);

  if (!context) {
    throw new Error('Cannot use TasksContext outside of Tasks Context Provider.');
  }

  return context;
};

type Action = { type: 'ARCHIVE_TASK'; id: string } | { type: 'PIN_TASK'; id: string };

type State = TaskInfo[];

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ARCHIVE_TASK':
      return state.map<TaskInfo>((task) => (task.id === action.id ? { ...task, state: 'TASK_ARCHIVED' } : task));
    case 'PIN_TASK':
      return state.map<TaskInfo>((task) => (task.id === action.id ? { ...task, state: 'TASK_PINNED' } : task));
    default:
      return state;
  }
};

interface TasksProviderProps {
  defaultTasks: TaskInfo[];
}

export const TasksProvider: React.FC<TasksProviderProps> = (props) => {
  const { defaultTasks, children } = props;
  const [tasks, dispatch] = React.useReducer(reducer, defaultTasks);

  const archiveTask = (id: string) => {
    dispatch({ type: 'ARCHIVE_TASK', id });
  };
  const pinTask = (id: string) => {
    dispatch({ type: 'PIN_TASK', id });
  };

  return <TasksContext.Provider value={{ tasks, archiveTask, pinTask }}>{children}</TasksContext.Provider>;
};
