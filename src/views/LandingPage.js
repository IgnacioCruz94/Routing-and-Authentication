import Container from "@mui/material/Container";
import NavBar from "./NavBar";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Container
        sx={{
          display: "grid",
          gridTemplateRows: "200px",
          justifyContent: "center",
          paddingTop: "10px"
        }}
      >
        <div>
          <h1> Welcome to ITK Blog </h1>
          <h2>by Ignacio Cruz</h2>
        </div>
      </Container>
    </>
  );
}
