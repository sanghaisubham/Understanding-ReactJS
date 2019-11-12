import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class TempCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 0 };
  }
  handleCelsiusChange = event => {
    this.setState({
      temp: event.target.value
    });
  };

  handleKelvinChange = event => {
    this.setState({
      temp: Number(event.target.value) - 273
    });
  };

  render() {
    return (
      <div>
        <CelsiusDisplay
          temp={this.state.temp}
          onCelsiusChange={this.handleCelsiusChange}
        />
        <br />
        <KelvinDisplay
          temp={Number(this.state.temp)}
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
          value={Number(props.temp)}
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
          value={Number(props.temp) + 273}
          onChange={props.onKelvinChange}
        />
      </label>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TempCalc />, rootElement);
