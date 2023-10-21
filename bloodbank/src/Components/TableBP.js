import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableBP = ({ data }) => {
  return (
    <Table style={{ width: "100%" }}>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Institute</TableCell>
          <TableCell>isActive</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.userName}</TableCell>
            <TableCell>{row.institute}</TableCell>
            <TableCell>{row.isActive ? "Active" : "Inactive"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableBP;
