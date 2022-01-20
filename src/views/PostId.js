import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import NavBar from "./NavBar";

export default function PostId() {
  const params = useParams();
  const navigation = useNavigate();

  const [post, setPost] = React.useState("");

  const handleReturnToPostsCard = () => {
    navigation("/posts");
  };

  React.useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(
      (resp) => {
        setPost(resp.data);
      }
    );
    console.log(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          paddingTop: "60px"
        }}
      >
        <Card
          sx={{
            maxWidth: "auto"
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Post
            </Typography>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.body}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="success"
              size="small"
              sx={{
                "&:hover": {
                  backgroundColor: "success.dark",
                  color: "white",
                  opacity: [0.8],
                  justifyContent: "end"
                }
              }}
              onClick={handleReturnToPostsCard}
            >
              Back to Posts
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
