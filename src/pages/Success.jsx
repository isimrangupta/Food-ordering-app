import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import RazorpayDemo from "../components/RazorpayDemo";
import { useLocation } from "react-router-dom";



const Success = () => {
  const [loading, setLoading] = useState(true);

const location = useLocation();
  const amount = location.state?.amount || 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        {loading ? (
          <PropagateLoader color="#36d7b7" />
        ) : (
          <div>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#444",
                marginBottom: "10px",
                textAlign: "center"
              }}
            >
              😋 One Click Away from Delicious Food!
            </h2>

            <p className="text-gray-800">
              <RazorpayDemo amount={amount} />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
