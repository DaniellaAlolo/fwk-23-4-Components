import React from "react";
import { LoginProvider } from "../Providers/"; // Corrected import
import FakeLogin from "./FakeLogin";

export default {
  title: "Component/FakeLogin",
  component: FakeLogin,
  decorators: [
    (Story) => (
      <LoginProvider>
        <Story />
      </LoginProvider>
    ),
  ],
};

export const Default = {
  args: {
    defaultUser: "exampleUser", // If needed to prefill fields or similar
    defaultPassword: "examplePassword", // If needed to prefill fields or similar
  },
};
