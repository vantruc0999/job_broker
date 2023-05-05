import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";

function PayPalButton(props) {
  const navigate = useNavigate()
  const { product } = props;
  console.log(product);

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [check, setCheck] = useState(false);
  const handleApprove = (orderId) => {
    setPaidFor(true);
  };
  if (check == true) {
  }
  console.log(check);
  if (error) {
    alert("oke", error);
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        onClick={(data, actions) => {
          const hasAlready = false;
          if (hasAlready) {
            setError("You already bough this course");
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  value: product.value,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);
         
          handleApprove(data.orderID);
          let formData = new FormData();
          formData.append("package_id", product.id);
          formData.append("payment_id", order.id);
          formData.append("status", order.status);
          formData.append("status", order.payer.email_address);
       
          console.log(product.id + order.id + order.status);

          let user = JSON.parse(localStorage.getItem("user"));
          let config = {
            headers: {
              Authorization: "Bearer " + user.token,
              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "application/json",
            },
          };

          axios
            .post(
              "http://127.0.0.1:8000/api/recruiter/payment",
              formData,
              config
            )
            .then((res) => {
              console.log(res.data);
              navigate('/addJob')
            });
        }}
        onCancel={() => {}}
        onError={(err) => {
          setError(err);
          console.log("Paypal error", err);
        }}
      />
    </PayPalScriptProvider>
  );
}
export default PayPalButton;
