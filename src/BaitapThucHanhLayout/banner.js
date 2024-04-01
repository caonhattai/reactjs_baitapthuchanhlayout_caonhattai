import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="bt-banner">
        <h1>A Warm Welcome</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione et
          nostrum esse reprehenderit odit corrupti iusto velit fugit. Aliquam,
          repellendus.
        </p>
        <button className="btn btn-primary">Call to action</button>
      </div>
    );
  }
}
