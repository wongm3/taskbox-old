import * as React from 'react';
import TasksContext from './tasks-context';

const useTasksContext = () => {
  const context = React.useContext(TasksContext);

  if (!context) {
    throw new Error('Cannot use TasksContext outside of Tasks Context Provider.');
  }

  return context;
};

export default useTasksContext;
