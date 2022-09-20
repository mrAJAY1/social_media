import { createTheme, Grid, Typography, ThemeProvider } from "@mui/material";
import { useRef, useState, useContext, useEffect } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import PasswordStrengthBar from "react-password-strength-bar";
import { SignupBtns } from "..";
import { SignupProvider } from "../../contexts/SignupContext";
import AnimateBR from "../Motions/AnimateBR";
import AnimateUtoD from "../Motions/AnimateUtoD";
import Style from "./Step5.module.css";

const theme = createTheme();

theme.typography.h2 = {
  "@media (max-width:600px)": {
    fontSize: "1.5rem",
  },
  color: "#344258",
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  lineHeight: "1.2rem",
  fontWeight: "bold",
  transform: "scale(1,0.9)",
};

function Step5() {
  const { data, setData, formErr, confirm, setConfirm, setFormErr } =
    useContext(SignupProvider);
  const [inputType, setInputType] = useState("text");
  const [show, setShow] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const pwd = useRef(null);
  const confirmpwd = useRef(null);

  // Checking if the password is empty before entering confirm password
  const validatePwd = () => {
    if (data.password === "") {
      setDisabled(true);
      setFormErr({ pwd: "Password field cannot be empty" });
      pwd.current.focus();
    } else if (data.password.length < 5) {
      setFormErr({ pwd: "Password should have atleast 5 characters" });
    }
  };
  const checkPswdEmpty = () => {
    validatePwd();
    if (!formErr.pwd) setDisabled(false);
  };

  // Handling eye button function
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  useEffect(() => {
    setInputType(show ? "text" : "password");
  }, [show]);

  // updating password
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      {/* Header */}
      <Grid
        item
        xs={12}
        sx={{ marginTop: { xs: 2, md: 10 } }}
        justifyContent='center'
        display='flex'
      >
        <AnimateUtoD>
          <ThemeProvider theme={theme}>
            <Typography variant='h2'>Let&#39;s secure your account</Typography>
          </ThemeProvider>
        </AnimateUtoD>
      </Grid>
      {/* Header close */}

      {/* body start */}
      <Grid item xs={11} sx={{ padding: "20px 0" }}>
        <AnimateBR>
          <div className={Style.step5Wrapper}>
            <div className={Style.childWrapper}>
              <div
                style={
                  formErr.pwd
                    ? {
                        border: "1px solid red",
                      }
                    : {
                        marginBottom: "50px",
                      }
                }
                className={Style.formWrapper}
              >
                {typeof formErr.pwd !== "undefined" ? (
                  <label style={{ color: "red", textTransform: "none" }}>
                    {formErr.pwd}
                  </label>
                ) : (
                  <label>Password</label>
                )}
                <div className={Style.inputWrapper}>
                  <input
                    value={data.password}
                    id='password'
                    name='password'
                    type='text'
                    ref={pwd}
                    placeholder='Enter Password'
                    onChange={handleChange}
                    onCopy={(e) => e.preventDefault()}
                  />
                </div>
                <PasswordStrengthBar
                  shortScoreWord=''
                  ref={confirmpwd}
                  style={{
                    width: "30%",
                    float: "right",
                    marginBottom: "20px",
                  }}
                  minLength={5}
                  password={data.password}
                />
              </div>
              <div
                className={Style.formWrapper}
                style={
                  formErr.confirmPwd && {
                    border: "1px solid red",
                  }
                }
              >
                {typeof formErr.confirmPwd !== "undefined" ? (
                  <label style={{ color: "red", textTransform: "none" }}>
                    {formErr.confirmPwd}
                  </label>
                ) : (
                  <label>Confirm password</label>
                )}
                <div className={Style.inputWrapper}>
                  <input
                    id='confirmPassword'
                    value={confirm}
                    disabled={isDisabled}
                    onFocusCapture={checkPswdEmpty}
                    onChange={(e) => setConfirm(e.target.value)}
                    onPaste={(e) => e.preventDefault()}
                    type={inputType}
                    placeholder='Confirm password'
                    style={{ width: "85%" }}
                  />
                  <a onClick={handleShow} href='/'>
                    {show ? (
                      <RiEyeLine className={Style.eye} />
                    ) : (
                      <RiEyeCloseLine className={Style.eye} />
                    )}
                  </a>
                </div>
              </div>
              <SignupBtns />
            </div>
          </div>
        </AnimateBR>
      </Grid>
      {/* body end  */}
    </>
  );
}

export default Step5;
