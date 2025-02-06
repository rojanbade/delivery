import React from "react";

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTempChange(e.target.value);
  }

  render() {
    return <input value={this.props.tempvalue} onChange={this.handleChange} />;
  }
}

export default TemperatureInput;
