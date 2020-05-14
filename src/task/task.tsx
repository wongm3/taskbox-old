import * as React from 'react';
import classNames from 'classnames';
import Checkmark from '../icons/Checkmark';
import StarFull from '../icons/StarFull';

export interface TaskInfo {
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
}
export interface TaskProps extends TaskInfo {
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export const Task: React.FC<TaskProps> = (props) => {
  const { id, title, state, onArchiveTask, onPinTask } = props;

  return (
    <div className="flex flex-wrap items-center h-12 w-full bg-white border-t border-solid border-gray-200 first-child:border-t-0 transition-all ease-out duration-150 hover:bg-gradient-list-item">
      <label htmlFor={`${id}-checked`} className="custom-label flex flex-none px-4 hover:cursor-pointer">
        <input
          type="checkbox"
          id={`${id}-checked`}
          name={`${id}-checked`}
          className="hidden"
          disabled
          defaultChecked={state === 'TASK_ARCHIVED'}
        />
        <button
          type="button"
          className="shadow-checkbox w-4 h-4 bg-transparent focus:outline-none"
          onClick={() => onArchiveTask(id)}
        >
          <Checkmark className="hidden fill-current text-primary pointer-events-none" />
        </button>
      </label>
      <div className="flex-1 truncate">
        <input
          className={classNames('bg-transparent w-full focus:cursor-text truncate', {
            'text-gray-500': state === 'TASK_ARCHIVED',
          })}
          type="text"
          value={title}
          placeholder="Input title"
          readOnly
        />
      </div>
      <div className="pr-5 transition-all ease-in duration-200">
        {state !== 'TASK_ARCHIVED' && (
          <button
            type="button"
            className={classNames('inline-block hover:text-primary active:text-gray-700 focus:outline-none', {
              'text-gray-300': state !== 'TASK_PINNED',
              'text-primary': state === 'TASK_PINNED',
            })}
            onClick={() => onPinTask(id)}
          >
            <StarFull className="w-4 h-4 fill-current" />
          </button>
        )}
      </div>
    </div>
  );
};
