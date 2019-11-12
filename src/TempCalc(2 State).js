import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class TempCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { celsius: 0, kelvin: 0 };
  }
  handleCelsiusChange = event => {
    this.setState({
      celsius: event.target.value,
      kelvin: Number(event.target.value) + 273
    });
  };

  handleKelvinChange = event => {
    this.setState({
      kelvin: event.target.value,
      celsius: Number(event.target.value) - 273
    });
  };
  render() {
    return (
      <div>
        <CelsiusDisplay
          temp={this.state.celsius}
          onCelsiusChange={this.handleCelsiusChange}
        />
        <br />
        <KelvinDisplay
          temp={this.state.kelvin}
          onKelvinChange={this.handleKelvinChange}
        />
      </div>
    );
  }
}

function CelsiusDisplay(props) {
  return (
    <div>
      <label>
        Temperature(Celsius) :
        <input
          type="number"
          value={props.temp}
          onChange={props.onCelsiusChange}
        />
      </label>
    </div>
  );
}

function KelvinDisplay(props) {
  return (
    <div>
      <label>
        Temperature (Kelvin) :
        <input
          type="number"
          value={props.temp}
          onChange={props.onKelvinChange}
        />
      </label>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TempCalc />, rootElement);
