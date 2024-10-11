import React from "react";
import RegisterForm from "../RegisterForm";
import MockRegister from "../MockRegister"; 

export default {
  title: "Component/RegisterForm",
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
    errorMessage,
  } = MockRegister(); 

  return (
    <RegisterForm
      userData={userData}
      handleUserChange={handleUserChange}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      registrationSuccess={registrationSuccess}
      errorMessage={errorMessage}
    />
  );
};




