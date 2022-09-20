import { Box, Button, Modal, Slider } from "@mui/material";
import { useRef, useContext, useState } from "react";
import AvatarEditor from "react-avatar-editor";

import { SignupProvider } from "../../contexts/SignupContext";

import "./index.scss";

const boxStyle = {
  minHeight: "300px",
  minWidth: "300px",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  maxHeight: "450px",
  maxWeight: "450px",
};
const fwbtnStyle = {
  backgroundColor: "#ffffff",
  boxShadow: "0px 0px 2px #efefef",
  color: "#363636",
  textTransform: "none",
  marginX: "15px",
  "&:hover": {
    backgroundColor: "#5596e6",
    color: "#fff",
    boxShadow: "0px 0px 2px #3d70b2",
  },
};
const clbtnStyle = {
  backgroundColor: "#ffffff",
  boxShadow: "0px 0px 2px #efefef",
  color: "#363636",
  textTransform: "none",
  marginX: "15px",
  "&:hover": {
    color: "white",
  },
};

function CropModal() {
  const { open, src, setOpen, setProfile } = useContext(SignupProvider);
  const [slideValue, setSlideValue] = useState(10);
  const cropRef = useRef(null);
  const handleCancel = () => {
    setOpen(false);
  };
  const handleSave = async () => {
    if (!cropRef) return;
    const dataUrl = cropRef.current.getImage().toDataURL();
    const result = await fetch(dataUrl);
    const blob = await result.blob();
    setProfile(URL.createObjectURL(blob));
    setOpen(false);
  };
  return (
    <div className='modal-container'>
      <Modal
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
        open={open}
      >
        <Box style={boxStyle}>
          <AvatarEditor
            image={src}
            style={{ width: "100%", height: "100%" }}
            border={50}
            ref={cropRef}
            borderRadius={150}
            color={[0, 0, 0, 0.72]} // RGBA
            scale={slideValue / 10}
            rotate={0}
            disableHiDPIScaling
          />
          <Slider
            sx={{ margin: "0 auto", width: "80%", color: "cyan" }}
            min={10}
            max={50}
            size='small'
            value={slideValue}
            defaultValue={slideValue}
            onChange={(e) => setSlideValue(e.target.value)}
          />
          <Box sx={{ display: "flex" }}>
            <Button onClick={handleCancel} sx={clbtnStyle}>
              Cancel
            </Button>
            <Button onClick={handleSave} sx={fwbtnStyle}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default CropModal;
