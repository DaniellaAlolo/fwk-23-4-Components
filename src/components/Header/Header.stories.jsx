import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header,
};

export const Default = () => {
  return <Header subtitle="Smart Solutions for an Easier Everyday" />;
};

export const WithSubtitleExample2 = () => {
  return <Header subtitle="Your Personal Guide for Efficiency and Insight" />;
};

export const WithSubtitleExample3 = () => {
  return <Header subtitle="Tailored Help to Maximize Your Productivity" />;
};
