import { createTheme, Grid, Typography, ThemeProvider } from "@mui/material";
// import { useContext } from "react";
// import { BsPlusCircle } from "react-icons/bs";
import { SignupBtns } from "..";
// import { SignupProvider } from "../../contexts/SignupContext";
import AnimateBR from "../Motions/AnimateBR";
import AnimateUtoD from "../Motions/AnimateUtoD";
import Style from "./Step4.module.css";

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

function Step4() {
  //   const { data, setData } = useContext(SignupProvider);
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setData({ ...data, [name]: value });
  //   };
  const changePreview = (e) => {
    e.preventDefault();
    console.log(" Change preview");
  };

  return (
    <>
      <Grid
        item
        xs={10}
        sx={{ marginTop: { xs: 2, md: 10 } }}
        justifyContent='center'
        display='flex'
      >
        <AnimateUtoD>
          <ThemeProvider theme={theme}>
            <Typography variant='h2'>Upload profile photo</Typography>
          </ThemeProvider>
        </AnimateUtoD>
      </Grid>
      <Grid item xs={11} sx={{ padding: "20px 0" }}>
        <AnimateBR>
          <div className={Style.Step4Wrapper}>
            <div className={Style.childWrapper}>
              <div className={Style.profileWrapper}>
                <div className={Style.profileinner}>
                  {/* <div className={Style.upload}>
                    <BsPlusCircle
                      color='white'
                      style={{
                        boxShadow: "0px 0px 1px #5596E6",
                        borderRadius: "50%",
                        backgroundColor: "#ededed",
                        fontSize: "1.3rem",
                      }}
                    />
                  </div> */}
                  <a
                    draggable={false}
                    href='/'
                    onClick={changePreview}
                    className={Style.uploadButton}
                  >
                    <svg
                      style={{ pointerEvents: "none" }}
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-plus'
                    >
                      <line x1='12' y1='5' x2='12' y2='19' />
                      <line x1='5' y1='12' x2='19' y2='12' />
                    </svg>
                  </a>
                  <img
                    draggable='false'
                    src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                    alt=''
                  />
                </div>
              </div>
              <SignupBtns />
            </div>
          </div>
        </AnimateBR>
      </Grid>
    </>
  );
}

export default Step4;
