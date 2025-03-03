import React, { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./PhoneAuth.css";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {
          console.log("reCAPTCHA solved");
        },
      });
    }
  }, []);

  // Send OTP
  const sendOtp = async () => {
    if (!phone) {
      setMessage("⚠️ Please enter a valid phone number.");
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(confirmation);
      setMessage("✅ OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage("❌ " + error.message);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!otp || !confirmationResult) {
      setMessage("⚠️ Please enter the OTP.");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setMessage("🎉 Phone number verified successfully!");
    } catch (error) {
      console.error("OTP Verification failed:", error);
      setMessage("❌ Invalid OTP. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="auth-box">
        <h2>📱 Mobile Authentication</h2>

        <input
          type="tel"
          className="input-field"
          placeholder="Enter phone number (+91XXXXXXXXXX)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="btn" onClick={sendOtp}>Send OTP</button>

        <div id="recaptcha-container"></div>

        {confirmationResult && (
          <>
            <input
              type="text"
              className="input-field"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="btn" onClick={verifyOtp}>Verify OTP</button>
          </>
        )}

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default PhoneAuth;
