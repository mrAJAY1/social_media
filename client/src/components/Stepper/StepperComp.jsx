import {
  Stepper,
  Step,
  styled,
  StepConnector,
  StepLabel,
  stepConnectorClasses,
} from "@mui/material";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineIdentification, HiOutlinePhotograph } from "react-icons/hi";
import propTypes, { string } from "prop-types";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 7,
    left: "calc(-50% + 3px)",
    right: "calc(50% + 3px)",
    height: 7,
    zIndex: "-1",
    transition: "0.5s",
    border: "1px solid black",
    borderColor: "white",
    borderRight: "0",
    borderLeft: "currentColor",
    borderWidth: 5,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#5596E6",
      width: "100%",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#5596E6",
      width: "100%",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "transparent",
    borderTopWidth: 7,
    borderRadius: 1,
    width: "0px",
    transition: "0.5s",
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  justifyContent: "center",
  height: "30px",
  width: "30px",
  alignItems: "center",
  transition: "ease-in 0.2s 0.2s",
  borderRadius: "50%",
  backgroundColor: "currentColor",
  ...(ownerState.active && {
    width: "30px",
    height: "30px",
    backgroundColor: "#5596E6",
    color: "white",
    borderRadius: "50%",
    boxShadow: "0px 0px 5px #5596E6",
  }),

  "& .QontoStepIcon-completedIcon": {
    color: "white",
    backgroundColor: "#yellow",
    zIndex: 1,
    fontSize: 22,
    border: "1px solid white",
    borderRadius: "50%",
    borderWidth: 5,
  },
  "& .QontoStepIcon-circle": {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid #5596E6",
    color: "currentColor",
  },

  "& .QontoStepIcon-icon": {
    width: "28px",
    height: "28px",
    border: "1px solid #cececea4",
    boxShadow: "-1px 3px 10px 0 rgb(0 0 0 / 6%)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
    backgroundColor: "white",
    stroke: "#cecece",
    color: "#cecece",
    transition: "0.2s 0.3s ",
    padding: "3px 9px",
  },
  "& .isActivetrue": {
    border: "1px solid #3d70b2",
    stroke: "#3d70b2",
    color: "#3d70b2",
  },
  "& .isCompletedtrue": {
    border: "1px solid #3d70b2",
    stroke: "#3d70b2",
    color: "#3d70b2",
  },

  "& .QontoStepIcon-svg": {
    height: "16px",
    width: "16px",
  },
}));
function Icons({ step, completed, active }) {
  switch (step) {
    case 0:
      return (
        <div
          className={`QontoStepIcon-icon isCompleted${completed} isActive${active}`}
        >
          <svg
            className='QontoStepIcon-svg'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
            <circle cx='12' cy='7' r='4' />
          </svg>
        </div>
      );
    case 1:
      return (
        <div
          className={`QontoStepIcon-icon isCompleted${completed} isActive${active}`}
        >
          <RiLockPasswordLine className='QontoStepIcon-svg' />
        </div>
      );

    case 2:
      return (
        <div
          className={`QontoStepIcon-icon  isCompleted${completed} isActive${active}`}
        >
          <HiOutlineIdentification className='QontoStepIcon-svg' />
        </div>
      );
    case 3:
      return (
        <div
          className={`QontoStepIcon-icon isCompleted${completed} isActive${active}`}
        >
          <HiOutlinePhotograph className='QontoStepIcon-svg' />
        </div>
      );
    case 4:
      return (
        <div
          className={`QontoStepIcon-icon isCompleted${completed} isActive${active}`}
        >
          <svg
            className='QontoStepIcon-svg'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
            <path d='M7 11V7a5 5 0 0 1 10 0v4' />
          </svg>
        </div>
      );

    case 5:
      return (
        <div
          className={`QontoStepIcon-icon isCompleted${completed} isActive${active}`}
        >
          <svg
            className='QontoStepIcon-svg'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' />
            <line x1='4' y1='22' x2='4' y2='15' />
          </svg>
        </div>
      );
    default:
  }
}

Icons.propTypes = {
  step: propTypes.number,
  completed: propTypes.bool,
  active: propTypes.bool,
};

function QontoStepIcon(props) {
  const { active, completed, className, step } = props;
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      <Icons step={step} active={active} completed={completed} />
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: propTypes.bool,
  className: propTypes.string,
  step: propTypes.number,
  /**
   *
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: propTypes.bool,
};

function StepperComp({ currentStep, steps }) {
  return (
    <Stepper
      alternativeLabel
      activeStep={currentStep}
      connector={<QontoConnector />}
    >
      {steps.map((step, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={index}>
            <StepLabel
              StepIconProps={{ step: index }}
              StepIconComponent={QontoStepIcon}
            />
          </Step>
        );
      })}
    </Stepper>
  );
}
StepperComp.propTypes = {
  currentStep: propTypes.number,
  steps: propTypes.arrayOf(string),
};

export default StepperComp;
