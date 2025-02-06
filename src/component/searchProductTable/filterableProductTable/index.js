import React from "react";
import SearchBar from "../searchBar";
import ProductTable from "../productTable";

const OriginalProduct = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false,
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(data) {
    const { name, value } = data;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const filteredData = OriginalProduct.filter((product) => {
      if (this.state.isStockOnly && !product.stocked) {
        return false;
      }
      if (this.state.filterText) {
        return product.name
          .toLowerCase()
          .includes(this.state.filterText.toLowerCase());
      }
      return true;
    });

    console.log(this.state.isStockOnly);
    return (
      <div>
        <h1>FilterableProductTable</h1>

        <SearchBar
          filterText={this.state.filterText}
          stocked={this.state.isStockOnly}
          onValueChange={this.updateValue}
        />
        <ProductTable
          originalProducts={OriginalProduct}
          filteredProduct={filteredData}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
