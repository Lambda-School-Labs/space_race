import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
/**
 * This form will render the client facing portion of the stripe transaction with  input fields and button.
 * the stripe token is created and passed through props.
 * the stripe token secures all the payment info and is used to communicate with the backend server.  
 * the server will then finalize the transaction with stripe. 
 */


class CheckoutForm extends React.Component {
  state = {
    resp_message: "",
    card_errors: ""
  };
  handleCardErrors = (card_dets) => {
    console.log("Card Section dets", card_dets);
    if (card_dets.error) {
      this.setState({ card_errors: card_dets.error.message });
    } else {
      this.setState({ card_errors: "" });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ card_errors: "", resp_message: "" });
 
    return this.props.stripe
      .createToken({ type: "card", name: "Stripe customer" })
      .then(result => {
        if (result.error) {
          alert("We are unable to process your payment, please make sure each field is filled in correctly", result.error);
          return this.setState({ card_errors: result.error.message });
        } else {
          console.log(
            "Received Stripe token, communicating with server: ",
            result.token
          );
          let formData = new FormData();
          formData.append("description", "Space-Race enrollment fees");
          formData.append("currency", "usd");
          formData.append("amount", 999);
          formData.append("source", result.token.id);
          return fetch(`http://127.0.0.1:8000/api/create-charge/`, {  //double check this endpoint
            method: "POST",
            headers: {
              accept: "application/json"
            },
            body: formData
          })
            .then(response => response.json())
            .then(json => this.setState({ resp_message: json.message }));
        }
      });
  };

  render() {
    return (
      <div>
        {this.state.resp_message && <h1>{this.state.resp_message}</h1>}
        <form onSubmit={this.handleSubmit}>
          <label>
            <h2>Card Details</h2>
            <CardElement
              style={{
                base: {
                  color: "#32325d",

                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSmoothing: "antialiased",
                  fontSize: "16px",
                  "::placeholder": {
                    color: "#aab7c4"
                  }
                },
                invalid: {
                  color: "#fa755a",
                  iconColor: "#fa755a"
                }
              }}
              onChange={this.handleCardErrors}
            />
            <div role="alert">
              <h2>{this.state.card_errors}</h2>
            </div>
          </label>
          <button className="form-btn">Confirm order</button>
        </form>
      </div>
    );
  }
}


export default injectStripe(CheckoutForm);