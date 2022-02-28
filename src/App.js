import React, { Component } from "react";
import FunctionCom from "./Components/FunctionComponent";
import ClassCom from "./Components/ClassComponent";
import "./style.css";
class App extends Component {
  state = {
    showClass: false,
    showFunc: false
  };

  render() {
    return (
      <div>
        <h1 className="heading1">
          Styling using Functional and Class Component
        </h1>

        <button
          onClick={() => this.setState({ showFunc: !this.state.showFunc })}
          className="fun">
          To see styling in functional component
        </button>

        <button
          onClick={() => this.setState({ showClass: !this.state.showClass })}
          className="cls">
          To see styling in class component
        </button>

        {this.state.showFunc ? <FunctionCom /> : '' }
        {this.state.showClass ? <ClassCom /> : '' }
      </div>
    );
  }
}
export default App;