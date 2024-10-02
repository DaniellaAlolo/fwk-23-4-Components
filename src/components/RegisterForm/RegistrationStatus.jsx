import React from "react";

const RegistrationStatus = ({ success }) => {
  return (
    <div>
      {success ? (
        <p style={{ color: "green" }}>Registration Successful!</p>
      ) : (
        <p style={{ color: "red" }}>
          Please complete the form and click Register.
        </p>
      )}
    </div>
  );
};
export default RegistrationStatus;
