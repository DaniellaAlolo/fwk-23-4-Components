import React from 'react';
import InputForm from './InputForm';

export default {
    title: 'Component/InputForm',
    component: InputForm,
};

const Template = (args) => <InputForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Enter your prompt:',
    placeholder: 'Type something...',
    onSubmit: (value) => alert(`Submitted: ${value}`),
};

export const CustomLabelAndPlaceholder = Template.bind({});
CustomLabelAndPlaceholder.args = {
    label: 'Your Custom Label:',
    placeholder: 'Custom Placeholder...',
    onSubmit: (value) => alert(`Custom Submission: ${value}`),
};
