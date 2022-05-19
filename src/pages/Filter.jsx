import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../redux/action/ProductAction";
import "./Filter.css"
class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        {/* <div className="filter-result">
          {this.props.filteredProducts.length} Products
        </div> */}
        <div className="filter-sort">
          Order{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        
      </div>
    );
  }
}
export default connect(
  (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);
