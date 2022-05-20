import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { removeFromCart } from "../redux/action/CartAction";
import { createOrder, clearOrder } from "../redux/action/OrderAction";
import Navbar from '../components/Navbar'
import Deals from '../components/Deals'

import "./card.css"
import { Link } from "@mui/material";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };
  closeModal = () => {
    this.props.clearOrder();
  };
  render() {
    const { cartItems, order } = this.props;
    return (
      <div className="colur" >
        <Deals />
        <Navbar />
        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom className="bb">
            <Link to={"/"}> <button className="close-modal" onClick={this.closeModal}>
               x
              </button>
              </Link>
              <div className="order-details">
                <h1>Thank you for shopping</h1>
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{order.address}</div>
                  </li>
                  {/* <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li> */}
                  <li>
                    <div>Total:</div>
                    <div>{formatCurrency(order.total)}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div>
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                  {/* <Link to={"/"}><button>Home</button></Link> */}
                 
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        <Fade right cascade>
          <div className="cart">

            <form onSubmit={this.createOrder}>
              <ul className="form-container">
              
                <h2>Fill the details for shipping</h2>
                <li>
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    onChange={this.handleInput}
                  ></input>
                </li>
                <li>
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    onChange={this.handleInput}
                  ></input>
                </li>
                <li>
                  <label>Address</label>
                  <input
                    name="address"
                    type="text"
                    required
                    onChange={this.handleInput}
                  ></input>
                </li>
                <li>
                  <button className="button primary" type="submit">
                    Checkout
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </Fade>
        {this.state.showCheckout && (
          <Fade right cascade>
            <div className="cart">
              <form onSubmit={this.createOrder}>
                <ul className="form-container">
                  <li>
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <label>Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <label>Address</label>
                    <input
                      name="address"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <button className="button primary" type="submit">
                      Checkout
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </Fade>
        )}
      </div>
    )
  }


}


export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, createOrder, clearOrder }
)(Details);