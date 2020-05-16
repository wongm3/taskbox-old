import * as React from 'react';
import TaskList from '../task-list';
import MoodSadOutline from '../icons/MoodSadOutline';
import Message from '../message';
import { TaskInfo } from '../task';

export interface InboxScreenProps {
  error?: string;
}

export const InboxScreen: React.FC<InboxScreenProps> = (props) => {
  const { error } = props,
    filter = (tasks: TaskInfo[]) => {
      return tasks.filter((task) => {
        return task.state !== 'TASK_ARCHIVED';
      });
    },
    title = (
      <>
        <nav className="bg-secondary py-6 px-5 text-center sm:text-left">
          <h1 className="text-xl leading-8 cursor-pointer whitespace-no-wrap">
            <span className="inline-block truncate font-extrabold text-blue-900 align-top max-w-full">Inbox</span>
          </h1>
        </nav>
        <TaskList filter={filter} />
      </>
    ),
    errorMessage = (
      <Message aria-label="sad face icon" icon={MoodSadOutline} title="Oh no!" subtitle="Something went wrong." />
    ),
    getContent = () => {
      if (error) {
        return errorMessage;
      }

      return title;
    };

  return <div className="min-h-screen bg-white">{getContent()}</div>;
};
