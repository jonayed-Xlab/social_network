import React, { Component } from "react";
import Post from "../Post/Post";
import "./MainPage.css";
import postimage from "../../images/post.jpg";
import uploadImage from "../../images/upload.png";
import "./MainPage.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
      processBar: "",
    };
  }
  componentDidMount() {
    this.getPost();
  }
  getPost = () => {
    const thisContext = this;
    // let data = [
    //   {
    //     postId: "1234",
    //     username: "Jonayed",
    //     postImageURL: postimage,
    //     timeStamp: "1234",
    //     likes: "1234",
    //   },
     
    // ];
    fetch("http://localhost:8080/post")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      thisContext.setState({ postArray: data });
    })
    .catch((error) => {});
    
  };

  upload = (event) => {
    let image = event.target.files[0];

    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ processBar: progress });
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let payload = {
            "postId": Math.floor(Math.random()*1000).toString(),
            "userId": JSON.parse(localStorage.getItem("users")).uid,
            "postPath": downloadURL,
            "timeStamp": new Date().getTime(),
            "likeCount": "0"
          };

          const requestOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch("http://localhost:8080/post", requestOption)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              
            })
            .catch((error) => {});
        });
      }
    );
  }
  render() {
   
    return (
      <div>
        <div className="" style={{ textAlign: "center", marginBottom: "0px" }}>
          <div className="fileupload">
            <label htmlFor="file-upload">
              <img src={uploadImage} alt="" className="mainpage__uploadicon" />
            </label>
            <input onChange={this.upload} id="file-upload" type="file" />
          </div>
        </div>
        <div className="upload__text">{this.state.processBar}</div>
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postId}
            username={item.userName}
            postimage={item.postPath}
            likes={item.likeCount}
          />
        ))}
      </div>
    );
  }
}
