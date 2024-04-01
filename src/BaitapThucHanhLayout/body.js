import React, { Component } from "react";
import Banner from "./banner";
import Item from "./item";

export default class Body extends Component {
  render() {
    return (
      <div className="container rounded bt-body">
        <Banner />
        <div className="d-flex">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}
