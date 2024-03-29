import * as React from 'react';

export interface MessageProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  'aria-label'?: string;
}

export const Message: React.FC<MessageProps> = (props) => {
  const { icon: Icon, title, subtitle, 'aria-label': ariaLabel } = props;

  return (
    <div className="absolute top-1/2 right-0 bottom-auto left-0 w-auto h-auto transform -translate-y-1/2 text-center">
      <Icon aria-label={ariaLabel} className="w-12 h-12 fill-current text-primary mx-auto my-4" />
      <div id="message-icon-title" className="font-extrabold text-gray-700">
        {title}
      </div>
      <div className="text-sm leading-5 text-gray-600">{subtitle}</div>
    </div>
  );
};
