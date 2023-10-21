import { Button } from "@mui/material";
import React from "react";

const ButtonBP = ({ label, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {label}
      </Button>
    </>
  );
};

export default Button;
