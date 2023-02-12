import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import React, { useState } from "react";
import Comments from "../comments/Comments";
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
  "View"
]

const Posts = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box
      flex={{ xs: 4, sm: 2, md: 4 }}
      p={{ xs: 0, md: 2 }}
      width={{ xs: 100, md: 300 }}
    >
      <Card sx={{ margin: 5 }}>
        <CardHeader title="Posts" />
        <CardContent>
          <CommonTable columns={columns} rows={rows} />
        </CardContent>
      </Card>
      <Button onClick={() => setOpen(true)}>Click Me</Button>
      <Comments open={open}/>
    </Box>
  );
};

export default Posts;
