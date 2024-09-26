import RegisterForm from "../RegisterForm";
import useMockRegister from "../MockRegister";

export default {
  title: "Component/RegisterForm",
  component: RegisterForm,
};

export const Default = {};

export const MockRegister = () => {
  // Använd mockregister för att simulera beteendet
  const {
    userData,
    handleUserChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    registrationSuccess,
  } = useMockRegister();

  return (
    <RegisterForm
      userData={userData}
      handleUserChange={handleUserChange}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      registrationSuccess={registrationSuccess}
    />
  );
};
