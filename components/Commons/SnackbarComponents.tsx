import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

type Props = {
  open: boolean;
  time: string;
  text: string;
  onClose: (e: any) => void;
};

const SnackbarComponents = ({ open, time, text, onClose }: Props) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={onClose}
        message={`${time} ${text}`}
      />
    </>
  );
};

export default SnackbarComponents;
