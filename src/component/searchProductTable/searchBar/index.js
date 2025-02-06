import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.props.onValueChange({ name, value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="filterText"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleChange}
        />
        <br />
        <input
          name="isStockOnly"
          type="checkbox"
          value={this.props.stocked}
          onChange={this.handleChange}
        />
        <label>Only show product in stock</label>
      </div>
    );
  }
}

export default SearchBar;
