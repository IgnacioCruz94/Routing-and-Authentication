import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateRows: "200px",
        justifyContent: "center",
        paddingTop: "50px"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1> 404 - Error </h1>
        <h2>Page NotFound</h2>
        <Link style={{ textDecoration: "none" }} to="/">
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
            Back to Landing Page
          </Button>
        </Link>
      </div>
    </Container>
  );
}
