import React, { Component } from "react";
import Header from "./header";
import Body from "./body";
import Banner from "./banner";
import Item from "./item";
import Footer from "./footer";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark">
          <Header />
        </div>
        <Body />
        <div className="bg-dark">
          <Footer />
        </div>
      </div>
    );
  }
}
