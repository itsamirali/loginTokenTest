import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Mybutton from "../../Ui/Mybutton";
import cx from "classnames";
import styles from "./Login.module.css";
import MyInput from "../../Ui/MyInput";
import Cookies from "universal-cookie";

function Login() {
  const userDataCookie = new Cookies();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setErrMsg("")
    if (username.length < 3) {
      setErrMsg("username must have at least 4 letter");
      return;
    }
    if (password.length < 5) {
      setErrMsg("password must have at least 6 letter");
      return;
    }
    if (!password) {
      setErrMsg("your password has no truthy value");
      return;
    }
    if (!username) {
      setErrMsg("your username has no truthy value");
      return;
    }
    userDataCookie.set("userToken", username, {
      path: "/",
      sameSite: true,
      expires: new Date(Date.now() + 10031536000000),
    });
    window.location.reload()
  };

  return (
    <div
      className={cx(
        styles.myContainer,
        "d-flex",
        "w-100",
        "align-items-center",
        "justify-content-center",
        "flex-column"
      )}
    >
      <h1 className="mb-3">login</h1>
      {errMsg && (<span className="text-danger mb-3">{errMsg}</span>)}
      <Form
        onSubmit={submitHandler}
        className={cx(styles.loginContainer, "p-3")}
      >
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <MyInput
            value={username}
            setValue={setUsername}
            label="username"
            inputTyp="text"
            myPlaceHlder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <MyInput
            value={password}
            setValue={setPassword}
            label="Password"
            inputTyp="password"
            myPlaceHlder="Password"
          />
        </Form.Group>
        <Mybutton
          btnTypColor="btn-success"
          childColor="text-white"
          variant="primary"
          type="submit"
        >
          Submit
        </Mybutton>
      </Form>
    </div>
  );
}

export default Login;
