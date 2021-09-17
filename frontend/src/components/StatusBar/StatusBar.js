import React, { Component } from "react";
import "./StatusBar.css";
import Avatar from "@material-ui/core/Avatar";
import statusimg from "../../images/pp1.png";
import "./StatusBar";
import uploadimage from "../../images/statusadd.png"

export default class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    };
  }
componentDidMount(){
    this.getData();
}
  getData = () => {
    let data = [
      {
        username: "jonayed_bapari",
        imgURL: "../../images/pp1.png",
      },
      {
        username: "shakil__rati",
        imgURL: "../../images/pp1.png",
      },
      {
        username: "shakil__rati",
        imgURL: "../../images/pp1.png",
      },
      {
        username: "jhg",
        imgURL: "../../images/pp1.png",
      },
    ];
    this.setState({ statusList: data });
  };

  render() {
    return (
      <div>
        <div className="statusbar__container">
        <img src={uploadimage} alt="" className="statusbar__upload" width="55px" height="55px"/>
          {this.state.statusList.map((item, index) =>(
            <div className="status">
              <Avatar className="statusbar__status" src={statusimg} />
              <div className="statusbar__text">{item.username}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
