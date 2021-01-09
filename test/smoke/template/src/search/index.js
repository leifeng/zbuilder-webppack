import React from "react";
import ReacDom from "react-dom";
import "./search.less";
import logo from "./images/logo.png";
import "../../common/index.js";
import { a } from "./tree-shaking";

if (false) {
  a();
}
r
class Search extends React.Component {
  render() {
    return (
      <div className="search">
        333
        <img src={logo33} />
      </div>
    );
  }
}
ReacDom.render(<Search />, document.getElementById("root"));
