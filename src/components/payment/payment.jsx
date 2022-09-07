import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Payment = ({total,currentUser}) => {
    const [user , setUser] = useState({})

  const config = {
    public_key: process.env.NODE_ENV.REACT_APP_PAYMENT_KEY,
    tx_ref: Date.now(),
    amount: `${total}`,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: user,
    customizations: {
      title: "CRWN-CLOTHINGS",
      description: "Payment for Items",
      logo: "../../assets/crown.svg.svg",
    },
  };
  useEffect(()=>{
    if(currentUser) {
        setUser(currentUser)
    }
  },[currentUser])
  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      {currentUser ? (
        <CustomButton
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
        >
          Pay Now
        </CustomButton>
      ) : (
        <p>Login to pay</p>
      )}
    </div>
  );
}

const mapStateToProps = (store) => ({
    currentUser : store.user.currentUser,
})
export default connect(mapStateToProps)(Payment);
