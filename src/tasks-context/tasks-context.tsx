import * as React from 'react';
import { TaskInfo } from '../task';

export interface TasksContextValue {
  loading?: boolean;
  tasks: TaskInfo[];
  archiveTask: (id: string) => void;
  pinTask: (id: string) => void;
}

const TasksContext = React.createContext<TasksContextValue | undefined>(undefined);

export default TasksContext;
