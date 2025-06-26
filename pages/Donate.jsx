// import React, { useState } from "react";

// function Donate() {
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [reEnteredAccountNumber, setReEnteredAccountNumber] = useState("");
//   const [ifscCode, setIfscCode] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expirationDate, setExpirationDate] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [selectedEpayment, setSelectedEpayment] = useState("");

//   const handlePaymentMethodChange = (event) => {
//     setSelectedPaymentMethod(event.target.value);
//   };

//   const handleEpaymentChange = (event) => {
//     setSelectedEpayment(event.target.value);
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold">Make a Donation</h1>
//       <p className="mt-4">Support disaster-affected communities by donating.</p>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">Choose a Payment Method</h2>

//         <div className="mt-4">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="cardPayment"
//               checked={selectedPaymentMethod === "cardPayment"}
//               onChange={handlePaymentMethodChange}
//               className="form-radio"
//             />
//             <span className="ml-2">Card Payment</span>
//           </label>
//         </div>

//         <div className="mt-2">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="ePayment"
//               checked={selectedPaymentMethod === "ePayment"}
//               onChange={handlePaymentMethodChange}
//               className="form-radio"
//             />
//             <span className="ml-2">E-Payment</span>
//           </label>
//         </div>

//         <div className="mt-2">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="bankTransfer"
//               checked={selectedPaymentMethod === "bankTransfer"}
//               onChange={handlePaymentMethodChange}
//               className="form-radio"
//             />
//             <span className="ml-2">Bank Transfer</span>
//           </label>
//         </div>
//       </div>

//       {selectedPaymentMethod === "cardPayment" && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Credit/Debit Card Details</h2>

//           <div className="mt-4">
//             <label className="block text-sm font-semibold" htmlFor="cardNumber">
//               Card Number:
//             </label>
//             <input
//               type="text"
//               id="cardNumber"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               className="w-full p-2 border mb-2 rounded"
//               placeholder="Enter Card Number"
//               required
//             />
//           </div>

//           <div className="flex space-x-4 mt-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-semibold" htmlFor="expirationDate">
//                 Expiration Date (MM/YY):
//               </label>
//               <input
//                 type="text"
//                 id="expirationDate"
//                 value={expirationDate}
//                 onChange={(e) => setExpirationDate(e.target.value)}
//                 className="w-full p-2 border mb-2 rounded"
//                 placeholder="MM/YY"
//                 required
//               />
//             </div>

//             <div className="w-1/2">
//               <label className="block text-sm font-semibold" htmlFor="cvv">
//                 CVV:
//               </label>
//               <input
//                 type="text"
//                 id="cvv"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//                 className="w-full p-2 border mb-2 rounded"
//                 placeholder="CVV"
//                 required
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedPaymentMethod === "ePayment" && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">E-Payment Options</h2>

//           <div className="mt-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 value="phonepe"
//                 checked={selectedEpayment === "phonepe"}
//                 onChange={handleEpaymentChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">PhonePe</span>
//             </label>
//           </div>

//           <div className="mt-2">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 value="gpay"
//                 checked={selectedEpayment === "gpay"}
//                 onChange={handleEpaymentChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">Google Pay (GPay)</span>
//             </label>
//           </div>

//           <div className="mt-2">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 value="paytm"
//                 checked={selectedEpayment === "paytm"}
//                 onChange={handleEpaymentChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">Paytm</span>
//             </label>
//           </div>

//           <div className="mt-2">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 value="slicepay"
//                 checked={selectedEpayment === "slicepay"}
//                 onChange={handleEpaymentChange}
//                 className="form-radio"
//               />
//               <span className="ml-2">SlicePay</span>
//             </label>
//           </div>
//         </div>
//       )}

//       {selectedPaymentMethod === "bankTransfer" && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Bank Transfer Details</h2>

//           <div className="mt-4">
//             <label className="block text-sm font-semibold" htmlFor="accountNumber">
//               Account Number:
//             </label>
//             <input
//               type="text"
//               id="accountNumber"
//               value={accountNumber}
//               onChange={(e) => setAccountNumber(e.target.value)}
//               className="w-full p-2 border mb-2 rounded"
//               placeholder="Enter Account Number"
//               required
//             />
//           </div>

//           <div className="mt-4">
//             <label className="block text-sm font-semibold" htmlFor="reEnterAccountNumber">
//               Re-enter Account Number:
//             </label>
//             <input
//               type="text"
//               id="reEnterAccountNumber"
//               value={reEnteredAccountNumber}
//               onChange={(e) => setReEnteredAccountNumber(e.target.value)}
//               className="w-full p-2 border mb-2 rounded"
//               placeholder="Re-enter Account Number"
//               required
//             />
//           </div>

//           <div className="mt-4">
//             <label className="block text-sm font-semibold" htmlFor="ifscCode">
//               IFSC Code:
//             </label>
//             <input
//               type="text"
//               id="ifscCode"
//               value={ifscCode}
//               onChange={(e) => setIfscCode(e.target.value)}
//               className="w-full p-2 border mb-2 rounded"
//               placeholder="Enter IFSC Code"
//               required
//             />
//           </div>
//         </div>
//       )}

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">Donation Amount</h2>
//         <input
//           type="number"
//           placeholder="Enter donation amount"
//           className="mt-2 p-2 border rounded w-full"
//         />
//       </div>

//       <div className="mt-6">
//         <button className="bg-blue-600 text-white p-2 rounded w-full">
//           Proceed to Pay with{" "}
//           {selectedPaymentMethod === "" ? "a Payment Method" : selectedPaymentMethod}
//         </button>
//       </div>
//     </div>
//   );
// }
// const handlePayment = () => {
//     if (!donationAmount || donationAmount <= 0) {
//       alert("Please enter a valid donation amount.");
//       return;
//     }
//     if (selectedPaymentMethod === "bankTransfer" && accountNumber !== reEnteredAccountNumber) {
//       alert("Account numbers do not match!");
//       return;
//     }
  
//     // Store donation details
//     const donation = {
//       name: "Anonymous", // You can modify this to take the user's name
//       amount: donationAmount,
//       date: new Date().toISOString().split("T")[0],
//       method: selectedPaymentMethod,
//     };
  
//     // Retrieve existing donations
//     const storedDonations = JSON.parse(localStorage.getItem("donations")) || [];
//     const updatedDonations = [donation, ...storedDonations];
  
//     // Save to localStorage
//     localStorage.setItem("donations", JSON.stringify(updatedDonations));
  
//     alert("Thank you for your donation!");
  
//     // Redirect to Dashboard after successful donation
//     window.location.href = "/dashboard";
//   };
  

// export default Donate;
// import React, { useState } from "react";

// function Donate() {
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [reEnteredAccountNumber, setReEnteredAccountNumber] = useState("");
//   const [ifscCode, setIfscCode] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expirationDate, setExpirationDate] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [selectedEpayment, setSelectedEpayment] = useState("");
//   const [donationAmount, setDonationAmount] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   const handlePaymentMethodChange = (event) => {
//     setSelectedPaymentMethod(event.target.value);
//   };

//   const handleEpaymentChange = (event) => {
//     setSelectedEpayment(event.target.value);
//   };

//   const handlePayment = () => {
//     if (!name || !phone || !email || !address) {
//       alert("Please fill in all user details before proceeding.");
//       return;
//     }
//     if (!donationAmount || donationAmount <= 0) {
//       alert("Please enter a valid donation amount.");
//       return;
//     }
//     if (selectedPaymentMethod === "bankTransfer" && accountNumber !== reEnteredAccountNumber) {
//       alert("Account numbers do not match!");
//       return;
//     }

//     const donation = {
//       name,
//       phone,
//       email,
//       address,
//       amount: donationAmount,
//       date: new Date().toISOString().split("T")[0],
//       method: selectedPaymentMethod,
//     };

//     const storedDonations = JSON.parse(localStorage.getItem("donations")) || [];
//     const updatedDonations = [donation, ...storedDonations];

//     localStorage.setItem("donations", JSON.stringify(updatedDonations));

//     alert("Thank you for your donation!");
//     window.location.href = "/dashboard";
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold">Make a Donation</h1>
//       <p className="mt-4">Support disaster-affected communities by donating.</p>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">User Details</h2>
//         <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mt-2" value={name} onChange={(e) => setName(e.target.value)} required />
//         <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded mt-2" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//         <input type="email" placeholder="Email ID" className="w-full p-2 border rounded mt-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="text" placeholder="Address" className="w-full p-2 border rounded mt-2" value={address} onChange={(e) => setAddress(e.target.value)} required />
//       </div>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">Donation Amount</h2>
//         <input type="number" placeholder="Enter donation amount" className="mt-2 p-2 border rounded w-full" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} required />
//       </div>

//       <button className="bg-blue-600 text-white p-2 rounded w-full mt-6" onClick={handlePayment}>
//         Proceed to Pay with {selectedPaymentMethod || "a Payment Method"}
//       </button>
//     </div>
//   );
// }

// export default Donate;
import React, { useState } from "react";

function Donate() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [reEnteredAccountNumber, setReEnteredAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedEpayment, setSelectedEpayment] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleEpaymentChange = (event) => {
    setSelectedEpayment(event.target.value);
  };

  const handlePayment = () => {
    if (!name || !email) {
      alert("Please fill in all user details before proceeding.");
      return;
    }
    if (!donationAmount || donationAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    if (selectedPaymentMethod === "bankTransfer" && accountNumber !== reEnteredAccountNumber) {
      alert("Account numbers do not match!");
      return;
    }
 
    const donation = {
      name,
      email,
      amount: donationAmount,
      date: new Date().toISOString().split("T")[0],
      method: selectedPaymentMethod,
    };

    const storedDonations = JSON.parse(localStorage.getItem("donations")) || [];
    const updatedDonations = [donation, ...storedDonations];

    localStorage.setItem("donations", JSON.stringify(updatedDonations));

    alert("Thank you for your donation!");
    window.location.href = "/dashboard";
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Make a Donation</h1>
      <p className="mt-4">Support disaster-affected communities by donating.</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">User Details</h2>
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mt-2" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email ID" className="w-full p-2 border rounded mt-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Donation Amount</h2>
        <input type="number" placeholder="Enter donation amount" className="mt-2 p-2 border rounded w-full" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} required />
      </div>

      <button className="bg-blue-600 text-white p-2 rounded w-full mt-6" onClick={handlePayment}>
        Proceed to Pay with {selectedPaymentMethod || "a Payment Method"}
      </button>
    </div>
  );
}

export default Donate;

