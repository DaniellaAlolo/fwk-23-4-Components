import useMockRegister from "./MockRegister";
import RegisterForm from "./RegisterForm";

export default {
  title: "Component/Registerform/MockRegister",
  component: RegisterForm,
};

export const Default = () => {
  const {
    userData,
    handleUserChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    registrationSuccess,
  } = useMockRegister();
  console.log("handleUserChange:", handleUserChange);
  console.log("handleEmailChange:", handleEmailChange);
  console.log("handlePasswordChange:", handlePasswordChange);
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
