import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLoginEmail = (event) => {
    event.preventDefault();

    if (email !== "example@example.com" || password !== "password") {
      setError(true);
      return;
    }
    localStorage.setItem("authorized", "1");
    navigation("/posts");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isValidLogin = () => {
    return email?.length && password?.length;
  };

  return (
    <>
      <div
        style={{
          paddingBlock: "50px",
          display: "grid",
          justifyContent: "center"
          //border: "5px solid green"
        }}
      >
        {error ? (
          <>
            <h1>Log in </h1> <h3>Error in Log in</h3>
          </>
        ) : (
          <h1>Log in</h1>
        )}
        <form onSubmit={handleLoginEmail}>
          <div>
            <TextField
              label="Email"
              placeholder="e.g.: ignacio@itk.com"
              type="email"
              name="email"
              required
              value={email}
              onChange={handleEmailChange}
              fullWidth
              variant="outlined"
            ></TextField>
            <div>
              <p></p>
            </div>
            <div className={{ height: "27px" }}></div>
            <TextField
              label="Password"
              placeholder="password"
              type={"password"}
              name="password"
              required
              value={password}
              onChange={handlePasswordChange}
              fullWidth
              variant="outlined"
            ></TextField>
            <div>
              <p></p>
            </div>
            <div className={{ margin: "16px 0px" }}>
              <Button
                type="submit"
                disabled={!isValidLogin()}
                fullWidth
                variant="contained"
                color="success"
              >
                Log in
              </Button>
            </div>
          </div>
        </form>
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
    </>
  );
}
