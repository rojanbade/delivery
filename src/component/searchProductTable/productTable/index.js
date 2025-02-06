import React from "react";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { originalProducts, filteredProduct } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProduct.length > 0
              ? filteredProduct.map((product, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{product.category}</td>
                      </tr>
                      <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                      </tr>
                    </React.Fragment>
                  );
                })
              : originalProducts.map((product, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{product.category}</td>
                      </tr>
                      <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
