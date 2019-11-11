import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function DisplayPart(props) {
  return (
    <div>
      <label>Count:{props.count}</label>
      <br />
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}
class Counter extends React.Component {
  //  In Above code,Counter is inherting from React.Component,
  //  by calling super, we are actually calling the parent element with props parameter,

  //if we intend on using this.props inside the constructor, we have to call super(props)

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // state = {
  //   count: 0
  // };
  handlePlusClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleMinusClick = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <DisplayPart
        count={this.state.count}
        onIncrement={this.handlePlusClick}
        onDecrement={this.handleMinusClick}
      />
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
