import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid/";
import inst_img from "../../images/9364675fb26a.svg";
import inst_logo from "../../images/inst_logo.svg";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import facebook from "../../images/fb.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="login__main">
              <div className="">
                <img src={inst_img} alt="" width="430px" />
              </div>
              <div className="login__rightcomponent">
                <div className="login_upsection">
                  <img className="login__logo" src={inst_logo} alt="" />
                  <div className="login__signin">
                    {this.state.isLogin ? <SignIn /> : <SignUp />}

                    <div className="login__ordiv">
                      <div className="login__dividor"></div>
                      <div className="login__or">OR</div>
                      <div className="login__dividor"></div>
                    </div>

                    <div className="login__fb">
                      <img
                        src={facebook}
                        width="15px"
                        style={{ marginRight: "2px" }}
                        alt=""
                      />
                      Log in with facebook
                    </div>
                    <div className="login__forgot">Forgot password</div>
                  </div>
                </div>

                <div className="login__signoption">
                  {this.state.isLogin ? (
                    <div className="login__signin">
                      Don't have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" }}
                      >
                        Sign up
                      </span>
                    </div>
                  ) : (
                    <div className="login__signup">
                      Have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" }}
                      >
                        Sign in
                      </span>
                    </div>
                  )}
                </div>
                <div className="login_downloadsection">
                  <div className="login_apptext">Get the app.</div>
                  <div className="login_option">
                    <img
                      src={appstore}
                      alt=""
                      className="login_dwimg"
                      width="136px"
                    />
                    <img
                      src={playstore}
                      alt=""
                      className="login_dwimg"
                      width="136px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
