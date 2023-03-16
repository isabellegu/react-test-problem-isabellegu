// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories
import React from 'react';
import App from './App.js';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';
  
// Meta data about the story and 
// its respective cnomponent
export default {  
    title:"App",
    component:App,
}

export const Default = () => {
    return <App />;
};

const Template = (args) => <App {...args} />;

export const ClickedDisplaysThanks = Template.bind({});
ClickedDisplaysThanks.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', {name: /Click me/i });
    await userEvent.click(button);
};


