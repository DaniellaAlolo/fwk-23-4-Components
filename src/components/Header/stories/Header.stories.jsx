import Header from "../Header";
import styles from "../Header.module.css";

export default {
  title: "Component/Header",
  component: Header,
  args: {
    title: "AI Assistant",
    subtitle: "Smart Solutions for an Easier Everyday",
  },
};

export const Default = (args) => <Header {...args} />;

export const WithSubtitleExample2 = Default.bind({});
WithSubtitleExample2.args = {
  title: "AI Assistant",
  subtitle: "Your Personal Guide for Efficiency and Insight",
};

export const WithSubtitleExample3 = Default.bind({});
WithSubtitleExample3.args = {
  title: "AI Assistant",
  subtitle: "Tailored Help to Maximize Your Productivity",
  className: styles.headerContainer3,
};

export const HeaderWithoutTitle =
   {
    args: {
      title: '',
      subtitle: '',  
  }  };
