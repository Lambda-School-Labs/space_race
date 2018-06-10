import React, { Component } from "react";

import { StripeProvider } from "react-stripe-elements";

import MyStoreCheckout from "./MyStoreCheckout";



class StripeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { stripe: "" };
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe(process.env.REACT_APP_publishable)
      });
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        
        this.setState({
          stripe: window.Stripe(process.env.REACT_APP_publishable)
        });
      });
    }
  }

  render() {
    return (
      this.state.stripe && (
        <StripeProvider stripe={this.state.stripe}>
          <MyStoreCheckout />
        </StripeProvider>
      )
    );
  }
}

export default StripeComponent;