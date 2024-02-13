import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./payment.css";
import LeftSideBar from "../leftSideBar/LeftSideBar";
// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://stack-overflow-backend-gwva.onrender.com";

const PaymnetPage = ({ slideIn, handleSlideIn }) => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState({
    name: "",
    price: 0,
  });
  console.log(amount);
  const user = useSelector((state) => state.currentUserReducer);
  const initPayment = (data) => {
    const options = {
      key_id: "rzp_test_rapXzN2LE3aAAy",
      amount: data.amount,
      currency: data.currency,
      name: user.result.name,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `${BASE_URL}/payment/verify`;
          const { data } = await axios.post(verifyUrl, response);
          console.log(data, "ssssssss");
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        name: user.result.name,
        email: user.result.email,
      },
      notes: {
        address: "Hello User",
      },
      theme: {
        color: "#3399cc",
      },
    };
    console.log(options);
    const rzp = new window.Razorpay(options);
    console.log(rzp);
    rzp.open();
  };

  const handlePayment = async () => {
    if (user) {
      try {
        const orderUrl = `${BASE_URL}/payment/pay`;
        if (amount.price === 0) {
          alert("please select valid subscription");
        } else {
          const { data } = await axios.post(orderUrl, { amount: amount.price });
          console.log(data);
          initPayment(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("LOGIN is required");
      navigate("/Auth");
    }
  };
  return (
    <div className="homme-conatiner-1 subscription-main">
      <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2 sub-subscription">
        <u><h1 className="subscription-heading">Subscription Plan's</h1></u>
        <div className="select-subscription">
          <div
            className="each-subscription"
            onClick={() => setAmount({ name: "Normal", price: 100 })}
          >
            <h2>Normal</h2>
            <hr className="hr-line" />
            <p>RS : 100</p>
          </div>
          <div
            className="each-subscription"
            onClick={() => setAmount({ name: "Silver", price: 500 })}
          >
            <h2>Silver</h2>
            <hr className="hr-line" />

            <p>RS : 500</p>
          </div>
          <div
            className="each-subscription"
            onClick={() => setAmount({ name: "Gold", price: 1000 })}
          >
            <h2>Gold</h2>
            <hr className="hr-line" />

            <p>RS : 1000</p>
          </div>
        </div>

        <button onClick={handlePayment} className="buy_btn">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PaymnetPage;
