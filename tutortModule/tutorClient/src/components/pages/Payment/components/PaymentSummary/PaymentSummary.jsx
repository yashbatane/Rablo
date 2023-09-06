import React from "react";
import "./styles/PaymentSummary.css";

const PaymentSummary = ()=> {
    return (
        <>
        <div className="payments-summary">
            <div className="top-heading">
                <h4>Order Summary</h4>
                <div className="Coin">
                    <h1>Coin Recharge </h1>
                </div>
                <p className="Heading">
                    <b>Discription</b>
                </p>
                <p className="text">
                    Create your account with us to get
                </p>
            </div>
        </div>
        </>
    );
}

export default PaymentSummary