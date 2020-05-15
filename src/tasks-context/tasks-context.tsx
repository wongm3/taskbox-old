import * as React from 'react';
import { TaskInfo } from '../task';

type Action = { type: 'ARCHIVE_TASK'; id: string } | { type: 'PIN_TASK'; id: string };

type State = TaskInfo[];
interface TasksContextValue {
  tasks: TaskInfo[];
  archiveTask: (id: string) => void;
  pinTask: (id: string) => void;
}

interface TasksProviderProps {
  defaultTasks: TaskInfo[];
}

const TasksContext = React.createContext<TasksContextValue | undefined>(undefined),
  useTasksContext = () => {
    const context = React.useContext(TasksContext);

    if (!context) {
      throw new Error('Cannot use TasksContext outside of Tasks Context Provider.');
    }

    return context;
  },
  reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'ARCHIVE_TASK':
        return state.map<TaskInfo>((task) => (task.id === action.id ? { ...task, state: 'TASK_ARCHIVED' } : task));
      case 'PIN_TASK':
        return state.map<TaskInfo>((task) => (task.id === action.id ? { ...task, state: 'TASK_PINNED' } : task));
      default:
        return state;
    }
  },
  TasksProvider: React.FC<TasksProviderProps> = (props) => {
    const { defaultTasks, children } = props,
      [tasks, dispatch] = React.useReducer(reducer, defaultTasks),
      archiveTask = (id: string) => {
        dispatch({ type: 'ARCHIVE_TASK', id });
      },
      pinTask = (id: string) => {
        dispatch({ type: 'PIN_TASK', id });
      };

    return <TasksContext.Provider value={{ tasks, archiveTask, pinTask }}>{children}</TasksContext.Provider>;
  };

export { TasksContext, useTasksContext, TasksProvider };
