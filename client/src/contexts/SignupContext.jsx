import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

export const SignupProvider = createContext();

function SignupContext({ children }) {
  const initialDt = {
    firstName: "",
    lastName: "",
    otp: "12345",
    contact: "",
    password: "",
    userName: "",
    contactType: "",
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState(initialDt);
  const [localOtp, setLocalOtp] = useState("");
  const [formErr, setFormErr] = useState({});
  const values = useMemo(
    () => ({
      currentStep,
      setFormErr,
      formErr,
      setCurrentStep,
      data,
      setData,
      localOtp,
      setLocalOtp,
    }),
    [data, formErr, currentStep, localOtp]
  );
  return (
    <SignupProvider.Provider value={values}>{children}</SignupProvider.Provider>
  );
}

SignupContext.propTypes = {
  children: propTypes.node,
};

export default SignupContext;
