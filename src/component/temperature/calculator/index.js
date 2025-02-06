import React from "react";
import { Boiling } from "../boiling-verdict";
import TemperatureInput from "../input";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(temperature) {
    this.setState({ temperature });
  }

  render() {
    return (
      <>
        <TemperatureInput
          tempvalue={this.state.temperature}
          onTempChange={this.handleChange}
        />
        <Boiling celcius={this.state.temperature} />
      </>
    );
  }
}

export default Calculator;
