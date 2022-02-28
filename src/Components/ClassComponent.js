import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div className="box2">
        <p className="heading2">This is created using class Component</p>
        <p className="ext">This is done using external CSS</p>
        <p style={{ color: "blue" }}> This is done using inline css</p>
      </div>
    );
  }
}
export default ClassComponent;