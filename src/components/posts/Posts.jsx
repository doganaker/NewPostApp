import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/api/apiCalls";
import Comments from "../comments/Comments";
import CommonTable from "../table/CommonTable";

const columns = ["Id", "User Id", "Title", "Body", "View"];

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts", "posts", dispatch);
  }, []);

  return (
    <Box
      flex={{ xs: 4, sm: 2, md: 4 }}
      p={{ xs: 0, md: 2 }}
      width={{ xs: 100, md: 300 }}
    >
      <Card sx={{ margin: 5 }}>
        <CardHeader title="Posts" />
        <CardContent>
          <CommonTable tableFor="posts" columns={columns} rows={posts} />
        </CardContent>
      </Card>
      <Comments />
    </Box>
  );
};

export default Posts;
