import React from "react";

const RazorpayDemo = ({amount}) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet.");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", 
      amount: amount * 100, 
      currency: "INR",
      name: "Diksha's Food App",
      description: "Secure Payment Gateway",
      handler: function (response) {
        alert("✅ Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Diksha Gupta",
        email: "diksha@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2 style={{ fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
        🔐 Secure Payment
      </h2>
      <button
        onClick={displayRazorpay}
        style={{
          backgroundColor: "#F37254",
          color: "#fff",
          padding: "12px 30px",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e35a40")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#F37254")}
      >
         Pay ₹{amount}
      </button>
    </div>
  );
};

export default RazorpayDemo;