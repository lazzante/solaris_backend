import "../assets/css/style.css";
import { React, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../assets/images/gunam_logo.png";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  async function handleLogin(creds) {
    try {
      const res = await axios
        .post("http://localhost:8080/login", {}, { auth: creds })
        .then((res) => {
          setIsLoading(false);
          if (res.status === 200) {
            props.history.push("/");
          }
        })
        .catch((apiError) => {
          setIsLoading(false);
          setAuthError("You Cannot Log In To The System");
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  /*---------------------------------v-JSX RETURN-v----------------------------------------*/
  return (
    <div className="mainLoginDiv">
      <Container className="customcontainer">
        <div className="formDiv">
          <img src={logo} alt="" className="gunam_logo" />

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const creds = {
                username: username,
                password: password,
              };
              handleLogin(creds);
              setIsLoading(true);
            }}
          >
            <Form.Group className="mb-4 mt-5" controlId="formBasicEmail">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setAuthError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Control
                size="lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setAuthError("");
                }}
              />

              {authError.length >= 1 ? (
                <div className="alert alert-danger mt-3">{authError}</div>
              ) : (
                <></>
              )}

              {isLoading ? (
                <Button
                  disabled
                  variant="warning"
                  size="lg"
                  type="submit"
                  className="mt-5 w-50 "
                >
                  {" "}
                  <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
                </Button>
              ) : (
                <Button
                  variant="warning"
                  size="lg"
                  type="submit"
                  className="mt-5 w-50 "
                  disabled={username.length <= 0 || password.length <= 0}
                >
                  Log In
                </Button>
              )}
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
