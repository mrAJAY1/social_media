import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

export const SignupProvider = createContext();

function SignupContext({ children }) {
  const initialDt = {
    firstName: "",
    lastName: "",
    otp: "",
    contact: "",
    password: "",
    userName: "",
    contactType: "",
  };
  const initialErr = {
    firstName: "",
    lastName: "",
    otp: "",
    confirmPassword: "",
    contact: "",
    password: "",
    userName: "",
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState(initialDt);
  const [localOtp, setLocalOtp] = useState();
  const [formError, setFormError] = useState(initialErr);
  const values = useMemo(
    () => ({
      currentStep,
      setFormError,
      formError,
      setCurrentStep,
      data,
      setData,
      localOtp,
      setLocalOtp,
    }),
    [data, formError, currentStep]
  );
  return (
    <SignupProvider.Provider value={values}>{children}</SignupProvider.Provider>
  );
}

SignupContext.propTypes = {
  children: propTypes.node,
};

export default SignupContext;
