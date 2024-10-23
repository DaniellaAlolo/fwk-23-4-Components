import currentProvider from "./loginConfig";

import {
  FakeLoginProvider,
  FakeLoginContext,
  useFakeLogin,
} from "./FakeLoginProvider.jsx";

const providers = {
  Fake: {
    provider: FakeLoginProvider,
    context: FakeLoginContext,
    hook: useFakeLogin,
  },
};

export const LoginProvider = providers[currentProvider].provider;
export const LoginContext = providers[currentProvider].context;
export const useLogin = providers[currentProvider].hook;
