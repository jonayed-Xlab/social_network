import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import imageSrc from "../../images/pp1.png";
import "./Info.css";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="info__container">
          <Avatar src={imageSrc} className="info__image" />
          <div className="info__content">
            <div className="info__username">Jonayed_bepari</div>
            <div className="info__description">Description</div>
          </div>
        </div>
      </div>
    );
  }
}
