// import axios from "axios";
// import Razorpay from 'razorpay'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay(userData, customerName) {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    console.log("User Data: ", userData)
    const options = {
        key: process.env.REACT_APP_RZP_SECRET_KEY, // Enter the Key ID generated from the Dashboard
        amount: userData.orderPayment.amount,
        currency: "INR",
        name: "Marvel Corp.",
        description: "Test Transaction",
        order_id: userData.orderPayment.id,
        handler: async function () {
            
        },
        prefill: {
            name: customerName,
            email: "",
            contact: "",
        },
        notes: {
            address: "Marvel Studios Disney",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

export default displayRazorpay