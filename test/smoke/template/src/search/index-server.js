"use strict";

const React = require("react");
const logo = require("./images/logo.png");
require("./search.less");

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        123123
        <img src={logo} />
      </div>
    );
  }
}
module.exports = <Search />;
