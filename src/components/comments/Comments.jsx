import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { StyledModal } from "../common/StyledHelperComponents";
import CloseIcon from "@mui/icons-material/Close";
import CommonTable from "../table/CommonTable";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const columns = [
  "Dessert (100g serving)",
  "Calories",
  "Fat (g)",
  "Carbs (g)",
  "Protein (g)",
  "View",
];

const Comments = ({ open }) => {
  return (
    <StyledModal open={open}>
      <Box
        width={10000}
        bgcolor={"background.default"}
        color={"text.primary"}
        p={3}
        borderRadius={30}
      >
        <Card sx={{ margin: 5 }}>
          <CardHeader
            title="Comments"
            action={
              <IconButton aria-label="close">
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            <CommonTable columns={columns} rows={rows} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={5}>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button>Back</Button>
              </ButtonGroup>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </StyledModal>
  );
};

export default Comments;
