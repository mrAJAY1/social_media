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
  const [confirm, setConfirm] = useState("");
  const [data, setData] = useState(initialDt);
  const [localOtp, setLocalOtp] = useState("");
  const [formErr, setFormErr] = useState({});
  const [open, setOpen] = useState(false);
  const [src, selectFile] = useState(null);
  const [crop, setCrop] = useState({
    unit: "px", // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 100,
    height: 100,
  });
  const [profile, setProfile] = useState(null);

  const values = useMemo(
    () => ({
      currentStep,
      setFormErr,
      formErr,
      confirm,
      setConfirm,
      setCurrentStep,
      data,
      setData,
      profile,
      setProfile,
      localOtp,
      setLocalOtp,
      src,
      selectFile,
      crop,
      setCrop,
      open,
      setOpen,
    }),
    [data, formErr, currentStep, localOtp, confirm, open, src, crop, profile]
  );
  return (
    <SignupProvider.Provider value={values}>{children}</SignupProvider.Provider>
  );
}

SignupContext.propTypes = {
  children: propTypes.node,
};

export default SignupContext;
