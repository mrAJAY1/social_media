import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

export const SignupProvider = createContext();

function SignupContext({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const values = useMemo(
    () => ({
      currentStep,
      setCurrentStep,
    }),
    [currentStep]
  );
  return (
    <SignupProvider.Provider value={values}>{children}</SignupProvider.Provider>
  );
}

SignupContext.propTypes = {
  children: propTypes.node,
};

export default SignupContext;
