import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { StyledModal } from "../common/StyledHelperComponents";
import CloseIcon from "@mui/icons-material/Close";
import CommonTable from "../table/CommonTable";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/features/comments/commentSlice";
import { useEffect } from "react";
import { fetchData } from "../../redux/api/apiCalls";

const columns = ["Id", "Name", "Email", "Post Id", "Body"];

const Comments = () => {
  const open = useSelector((state) => state.comment.isOpen);
  const rows = useSelector((state) => state.comment.comments);
  const postId = useSelector((state) => state.comment.postId);
  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    fetchData(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      "comments",
      dispatch
    );
  }, [postId]);

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
              <IconButton aria-label="close" onClick={close}>
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            <CommonTable tableFor="comments" columns={columns} rows={rows} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={5}>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button onClick={close}>Back</Button>
              </ButtonGroup>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </StyledModal>
  );
};

export default Comments;
