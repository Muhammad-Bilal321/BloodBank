import React from "react";
import TextField from "@mui/material/TextField";

const InputBP = ({ type, value, onChange, label, className }) => {
  return (
    <TextField
      type={type}
      value={value}
      onChange={onChange}
      label={label}
      variant="outlined"
      style={{ marginBottom: "10px" }}
      className={className}
    />
  );
};

export default InputBP;
