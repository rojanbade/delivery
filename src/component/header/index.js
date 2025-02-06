import React from "react";
import BR from "../../asset/img/br.jpg";
import HR from "../../asset/img/hr.jpg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      colorStatus: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  }

  handleChangeColor() {
    this.setState({
      colorStatus: "red",
    });
  }
  render() {
    return (
      <>
        <img
          src={this.state.clicked ? BR : HR}
          alt="user"
          width={100}
          height={100}
        />
        <button onClick={this.handleClick}>Change image</button>
        <button onClick={this.handleChangeColor}>Change color</button>

        <h1 style={{ color: this.state.colorStatus }}>{this.props.title}</h1>
      </>
    );
  }
}
export default Header;
