import React from 'react';
import ExamplePrompts from './ExamplePrompts';


export default {
    title: 'Component/ExamplePrompts',
    component: ExamplePrompts,
};

// Template för att återanvända för olika stories
const Template = (args) => <ExamplePrompts {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
    prompts: [
        'Describe a futuristic city.',
        'What is your favorite childhood memory?',
        'Explain how a black hole works.',
        'Create a list of top 5 travel destinations.',
    ],
};

// Empty State
export const Empty = Template.bind({});
Empty.args = {
    prompts: [],
};



