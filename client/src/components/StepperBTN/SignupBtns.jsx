import styled from "@emotion/styled";
import {
  Button,
  CircularProgress,
  Grid,
  circularProgressClasses,
  buttonClasses,
} from "@mui/material";
import { useState, useContext, useEffect, useRef } from "react";
import { SignupProvider } from "../../contexts/SignupContext";

const StyledLoader = styled(CircularProgress)(() => ({
  [`&.${circularProgressClasses.root}`]: {
    position: "relative",
    top: "unset",
    left: "unset",
    bottom: "unset",
    margin: "unset",
    marginLeft: "unset",
    marginBottom: "unset",
    animationDuration: "0.7s",
  },
}));

const ForwardBtn = styled(Button)(() => ({
  minWidth: "90px",
  fontSize: "0.8rem",
  marginLeft: "10px",
  background: "#fff",
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #dbdbdb",
  borderRadius: "0.65rem",
  padding: "calc(0.5em - 1px) 1em",
  lineHeight: "1",
  fontWeight: "500",
  color: "#363636",
  textTransform: "none",
  [`&.${buttonClasses.disabled}`]: {
    background: "#5596e6",
  },
  "&:hover": {
    color: "white",
    borderColor: "#5596e6",
    background: "#5596e6",
    boxShadow:
      "0 14px 26px -12px rgb(85 150 230 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(85 150 230 / 20%) !important",
  },
}));
const BackWardBtn = styled(Button)(() => ({
  minWidth: "90px",
  fontSize: "0.8rem",
  marginLeft: "10px",
  background: "#fff",
  boxShadow: "none",
  border: "1px solid #dbdbdb",
  borderRadius: "0.65rem",
  padding: "calc(0.5em - 1px) 1em",
  lineHeight: "1",
  fontWeight: "500",
  color: "#363636",
  textTransform: "none",
  "&:hover": {
    background: "white",
    borderColor: "#b5b5b5",
    boxShadow: "none",
  },
}));

function SignupBtns() {
  const [currentValue, setCurrentValue] = useState("Next");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const timer = useRef();

  const {
    currentStep,
    setCurrentStep,
    data,
    setData,
    formErr,
    setFormErr,
    localOtp,
    confirm,
    isPreviewUploaded,
  } = useContext(SignupProvider);
  const { firstName, lastName, contact, otp, userName } = data;

  const incrementVal = async () => {
    setLoading(true);
    function validateStep1() {
      const error = {};
      const regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const regPhone = /^\d{10}$/;
      const regName = /^[a-zA-Z ]{2,30}$/;
      if (!regName.test(firstName) || firstName === "") {
        error.firstName = "Enter a valid first name";
      }
      if (!regName.test(lastName) || lastName === "") {
        error.lastName = "Enter a valid last name";
      }
      if (!regEmail.test(contact)) {
        if (!regPhone.test(contact)) {
          error.contact = "Enter a valid email or phone number";
        } else {
          setData({ ...data, contactType: "phone" });
        }
      } else {
        setData({ ...data, contactType: "email" });
      }
      return error;
    }
    function validateStep2() {
      const error = {};
      if (localOtp !== otp || localOtp === "") {
        error.otp = "That otp is invalid";
      }
      return error;
    }
    function validateStep3() {
      const error = {};
      const regex = /^[a-z0-9_.]+$/;
      if (!regex.test(userName) || userName === "")
        error.userName = "That username is invalid";
      return error;
    }
    function validateConfirm() {
      if (data.password === "") {
        return { pwd: "Password cannot be empty" };
      }
      if (data.password !== confirm) {
        return { confirmPwd: "Passwords doesn't match" };
      }
      return {};
    }
    if (currentStep === 0) {
      setTimeout(() => {
        setFormErr(validateStep1());
        setLoading(false);
        setSubmitted(true);
      }, 1000);
    } else if (currentStep === 1) {
      setTimeout(() => {
        setFormErr(validateStep2());
        setLoading(false);
        setSubmitted(true);
      }, 1000);
    } else if (currentStep === 2) {
      setTimeout(() => {
        setFormErr(validateStep3());
        setLoading(false);
        setSubmitted(true);
      }, 1000);
    } else if (currentStep === 4) {
      setTimeout(() => {
        setFormErr(validateConfirm());
        setLoading(false);
        setSubmitted(true);
      }, 1000);
    } else if (currentValue === "Skip") {
      setTimeout(() => {
        setLoading(false);
        setCurrentStep(currentStep + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    clearTimeout(timer.current);
  }, []);
  useEffect(() => {
    if (currentStep === 3 && !isPreviewUploaded) {
      setCurrentValue("Skip");
    }
  }, [isPreviewUploaded]);

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && submitted) {
      setCurrentStep(currentStep + 1);
    }
  }, [formErr, submitted]);
  const decrementVal = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <Grid display='flex' justifyContent='end' item xs={12}>
      {currentStep > 0 && (
        <BackWardBtn onClick={decrementVal} variant='contained'>
          Back
        </BackWardBtn>
      )}
      {currentStep < 5 && (
        <ForwardBtn
          disabled={!!isLoading}
          onClick={incrementVal}
          variant='contained'
        >
          {isLoading ? (
            <StyledLoader
              size={15}
              sx={{
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          ) : (
            currentValue
          )}
        </ForwardBtn>
      )}
    </Grid>
  );
}

export default SignupBtns;
