import Btn from './Btn';

export default {
  title: 'Component/Btn',
  component: Btn,
  argTypes: {
    text: { control: 'text' }, 
  },
};

const Template = (args) => <Btn {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click Me',
};
