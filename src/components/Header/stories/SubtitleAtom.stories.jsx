import SubtitleAtom from "../SubtitleAtom";

export default {
  title: "Component/Header/SubtitleAtom",
  component: SubtitleAtom,
  args: {
    subtitle: "Smart Solutions for an Easier Everyday",
  },
};
export const Default = (args) => <SubtitleAtom {...args} />;

export const SubtitleExample2 = Default.bind({});
SubtitleExample2.args = {
  subtitle: "Your Personal Guide for Efficiency and Insight",
};

export const SubtitleExample3 = Default.bind({});
SubtitleExample3.args = {
  subtitle: "Tailored Help to Maximize Your Productivity",
};
