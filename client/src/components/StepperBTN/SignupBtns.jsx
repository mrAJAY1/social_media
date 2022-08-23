import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { useContext } from "react";
// import axios from "axios";
import { SignupProvider } from "../../contexts/SignupContext";
// import serverUrl from "../../constants/urls";
const ForwardBtn = styled(Button)(() => ({
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
  const {
    formError,
    setData,
    currentStep,
    setCurrentStep,
    data,
    // setOtp,
    otp,
    localOtp,
    setFormError,
  } = useContext(SignupProvider);
  const error = {};
  function validateContact() {
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regPhone = /^[0-9]+$/;
    if (!regPhone.test(data.contact)) {
      if (!regEmail.test(data.contact)) {
        setFormError({ ...formError, email: "Enter a valid email" });
        return false;
      }
      setData({ ...data, contactType: "email" });
      return true;
    }
    if (data.contact.length !== 10) {
      error.phone = "Enter a valid phone number";
      setFormError(error);
      return false;
    }
    setData({ ...data, contactType: "phone" });
    return true;
  }
  function validateFirstName() {
    const regName = /^[a-zA-Z ]{2,30}$/;
    if (!regName.test(data.firstName)) {
      setFormError({ ...formError, firstName: "Enter a valid first name" });
      return false;
    }
    return true;
  }
  function validateLastName() {
    const regName = /^[a-zA-Z ]{2,30}$/;
    if (!regName.test(data.lastName)) {
      setFormError({ ...formError, lastName: "Enter a valid last name" });
      return false;
    }
    return true;
  }

  const incrementVal = () => {
    if (currentStep === 0) {
      const isContactValid = validateContact();
      const isFirstNameValid = validateFirstName();
      const isLastNameValid = validateLastName();

      if (isContactValid && isFirstNameValid && isLastNameValid) {
        // axios
        //   .post(`${serverUrl}generate_otp`, {
        //     data: data.contact,
        //     contactType: data.contactType,
        //   })
        //   .then((res) => {
        //     const response = res.json();
        //     setOtp(response.otp);
        console.log(isContactValid);
        console.log(isFirstNameValid);
        console.log(isLastNameValid);
        setCurrentStep(currentStep + 1);
        // });
      }
    } else if (currentStep === 2) {
      if (localOtp !== otp) {
        error.otp = "invalid OTP";
        setFormError(error);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
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
        <ForwardBtn onClick={incrementVal} variant='contained'>
          Next
        </ForwardBtn>
      )}
    </Grid>
  );
}

export default SignupBtns;
