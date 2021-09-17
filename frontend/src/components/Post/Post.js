import React, { Component } from "react";
import "./Post.css";
import Avtar from "@material-ui/core/Avatar";
import postimage from "../../images/post.jpg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    fetch('http://localhost:8080/comments/'+this.props.id)
    .then(response => response.json())
    .then(data => {
      this.setState({ commentList: data });
    });
    
  };

  submitComments = (event) =>{
    if(event.key == "Enter"){
      let comment = event.currentTarget.value;
      if(comment != null || comment != undefined){
        let payload = {
          "commentId":Math.floor(Math.random()*1000000).toString(),
          "userId":JSON.parse(localStorage.getItem("users")).uid,
          "postId":this.props.id,
          "timeStamp": new Date().getTime(),
          "comment": comment
          
        };

        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8080/comments", requestOption)
          .then((response) => response.json())
          .then((data) => {
            this.getComments();
          })
          .catch((error) => {});
      }
    }
  }
  render() {
    return (
      <div className="post__container">
        {/* Header */}
        <div className="post__header">
          <Avtar className="post__image" src={this.props.profileImage} />
          <div className="post__username">{this.props.username}</div>
        </div>

        {/* Image */}
        <div className="">
          <img src={this.props.postimage} width="615px" alt="" />
        </div>

        {/* Analutics */}
        <div>
          <div className="" style={{ marginLeft: "10px" }}>
            <img src={love} className="post__reactimg" alt="" />
            <img src={comment} className="post__reactimg" alt="" />
            <img src={share} className="post__reactimg" alt="" />
          </div>
          <div className="" style={{ marginLeft: "20px", fontWeight: "bold" }}>
            {this.props.likes} likes
          </div>
        </div>

        {/* Comment */}
        <div className="">
          {
          this.state.commentList.map((item, index)=>(
            <div className="post__comment">
              {item.userName}:{item.comment}
            </div>
          ))
          }

          <input
            onKeyPress={this.submitComments}
            type="text"
            className="post__commentbox"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    );
  }
}
