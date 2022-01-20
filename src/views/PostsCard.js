import * as React from "react";
import Axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";

export default function PostCards() {
  const [posts, setPosts] = React.useState([]);

  const navigation = useNavigate();
  const location = useLocation();
  const currentPage = React.useMemo(
    () => new URLSearchParams(location.search).get("page"),
    [location.search]
  );

  const [page, setPage] = React.useState(currentPage ? Number(currentPage) : 1);

  const handleChange = (event, value) => {
    navigation(`${location.pathname}?page=${value}`);
    setPage(value);
  };

  React.useEffect(() => {
    Axios.get(
      `https://jsonplaceholder.typicode.com/posts/?_page=${currentPage}`
    ).then((resp) => {
      setPosts(resp.data);
    });
    navigation(`${location.pathname}?page=${page}`);
  }, [currentPage]);

  return (
    <>
      <NavBar />
      <Container
        sx={{
          display: "grid",
          justifyItems: "center",
          paddingTop: "30px"
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={posts.length}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Container>

      <Container
        fixed
        sx={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "200px 200px 200px 200px 200px",
          justifyContent: "center",
          paddingTop: "30px"
        }}
      >
        {posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              maxWidth: 200,
              display: "grid",
              gridTemplateRows: "150px 50px"
            }}
          >
            <CardActionArea>
              <CardContent sx={{ justifyContent: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  {post.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link style={{ textDecoration: "none" }} to={`/posts/${post.id}`}>
                <Button
                  size="small"
                  color="success"
                  sx={{
                    "&:hover": {
                      backgroundColor: "success.dark",
                      color: "white",
                      opacity: [0.8],
                      justifyContent: "end"
                    }
                  }}
                >
                  View Post
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
}
