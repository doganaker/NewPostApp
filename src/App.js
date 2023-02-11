import { Box, Stack } from '@mui/material'
import Navbar from "./components/navbar/Navbar";
import Posts from './components/posts/Posts';
import Sidebar from "./components/sidebar/Sidebar";


const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack>
        <Sidebar />
        <Posts />
      </Stack>
    </Box>

  );
}

export default App;
