import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      img: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Handle click");
    axios.get("https://api.github.com/users/amreshy29").then(res => {
      console.log(res);
      this.setState({ username: res.data.name, img: res.data.avatar_url });
    });
  }
  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click
        </button>
        {}
        <p>{this.state.username}</p>
        <p>
          <img src={this.state.img} />
        </p>
      </div>
    );
  }
}

export default App;
