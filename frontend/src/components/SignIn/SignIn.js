import React, { Component } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../LoginPage/LoginPage.css";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      password: null,
    };
  }

  login =()=> {
    signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        
        localStorage.setItem("users", JSON.stringify(user));
        window.location.reload();
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
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
          placeholder="Phone number, usernsme or email"
        />
        <input
          onChange={(event) => {
            this.state.password = event.currentTarget.value;
          }}
          type="password"
          className="login__text"
          placeholder="Password"
        />
        <button onClick={this.login} className="login__button">
          Log In
        </button>
      </div>
    );
  }
}

export default SignIn;
