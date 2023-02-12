import React from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Posts />
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "none", md:"block" } }}/>
      </Stack>
    </Box>
  );
};

export default Home;
