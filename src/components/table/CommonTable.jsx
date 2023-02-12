import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import { openModal } from "../../redux/features/comments/commentSlice";
import { useDispatch } from "react-redux";

const CommonTable = ({ tableFor, columns, rows }) => {
  const dispatch = useDispatch();
  const handleModalVisibility = (postId) => {
    dispatch(openModal(postId));
  };

  const rowSetter = () => {
    debugger
    if (tableFor === "posts") {
      return rows.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell width={80}>{row.userId}</TableCell>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.body}</TableCell>
          <TableCell>
            <Button onClick={() => handleModalVisibility(row.id)}>
              <Visibility />
            </Button>
          </TableCell>
        </TableRow>
      ));
    } else {
      return rows.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell width={80}>{row.postId}</TableCell>
          <TableCell>{row.body}</TableCell>
        </TableRow>
      ));
    }
  };

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="left">{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{rowSetter()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
