import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header,
};

export const Default = () => {
  return <Header subtitle="The Best Assistant Ever" />;
};

export const WithSubtitleExample2 = () => {
  return <Header subtitle="Welcome to the AI Assistant" />;
};

export const WithSubtitleExample3 = () => {
  return <Header subtitle="Your Personal Guide" />;
};
