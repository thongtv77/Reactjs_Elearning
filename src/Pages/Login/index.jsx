import React, { useState } from "react";
import { Prompt } from "react-router";
export default function Login(props) {
  const [userLogin, setUserLogin] = useState({
    userName: "",
    passWord: "",
    status: "false",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newUserLogin = {
      ...userLogin,
      [name]: value,
    };
    let valid = true;
    for (let key in newUserLogin) {
      if (key !== "status") {
        if (newUserLogin[key].trim() === "") {
          valid = false;
        }
      }
    }
    if (!valid) {
      newUserLogin.status = true;
    } else {
      newUserLogin.status = false;
    }

    setUserLogin(newUserLogin);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (userLogin.userName === "thongtv" && userLogin.passWord === "123") {
      // If True --- Goback
      // props.history.goBack();
      // Chuyen den trang chi dinh
      // props.history.push("/Home");
      props.history.replace("/Home");
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
    } else {
      alert("Login Failed");
      return;
    }
  };
  return (
    <div>
      <form className="container" onSubmit={handleLogin}>
        <h3 className="display 4">LOGIN</h3>
        <div className="form-group">
          <p>UserName</p>
          <input
            name="userName"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <p>Password</p>
          <input
            name="passWord"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success">Login</button>
        </div>
        <Prompt
          when={userLogin.status}
          message={(location) => {
            // console.log(location);
            return "Bạn có chắc chắn rời khỏi không?";
          }}
        />
      </form>
    </div>
  );
}
