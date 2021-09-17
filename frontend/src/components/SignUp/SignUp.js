import React, { Component } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      name: null,
      userName: null,
      password: null,
    };
  }

  newSignUp = (e) => {
    createUserWithEmailAndPassword(
      auth,
      this.state.emailId,
      this.state.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        let payload = {
          userId: user.uid,
          userName: this.state.userName,
          name: this.state.name,
          profileImage: "",
        };

        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8080/users", requestOption)
          .then((response) => response.json())
          .then((data) => {
            
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
          })
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  render() {
    return (
      <div>
        <input
          onChange={(event) => {
            this.state.emailId = event.currentTarget.value;
          }}
          type="text"
          className="login__text"
          placeholder="Phone number or Email"
        />
        <input
          onChange={(event) => {
            this.state.name = event.currentTarget.value;
          }}
          type="text"
          className="login__text"
          placeholder="Full Name"
        />
        <input
          onChange={(event) => {
            this.state.userName = event.currentTarget.value;
          }}
          type="text"
          className="login__text"
          placeholder="User name"
        />
        <input
          onChange={(event) => {
            this.state.password = event.currentTarget.value;
          }}
          type="password"
          className="login__text"
          placeholder="Password"
        />
        <button className="login__button" onClick={this.newSignUp}>
          Log In
        </button>
      </div>
    );
  }
}

export default SignUp;
