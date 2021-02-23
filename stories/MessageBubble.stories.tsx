import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { MessageBubble, MessageBubbleProps } from '../components/MessageBubble';

let Template: Story<MessageBubbleProps> = (args: any) => <MessageBubble {...args}></MessageBubble>;

export const Base = Template.bind({});

Base.args = {
  children: (
    <>
      Got a question? <br />
      Chat with me in WhatsApp!
    </>
  ),
};

export default {
  title: 'MessageBubble',
  component: MessageBubble,
};
