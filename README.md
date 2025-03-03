# 📱 Mobile Authenticator

A React + Firebase mobile number authentication system with OTP verification and reCAPTCHA security.

## 🚀 Features

✅ Mobile number authentication using Firebase Auth

✅ OTP (One-Time Password) verification

✅ Google reCAPTCHA for security

✅ User-friendly UI for easy login/signup

✅ Error handling for invalid inputs


## 🛠 Technologies Used

Frontend: React.js

Backend: Firebase Authentication

Security: Google reCAPTCHA

Styling: CSS



## 📌 Installation

1️⃣ Clone the Repository
    git clone https://github.com/abhi9anandx/mobile-authenticator.git
    cd mobile-authenticator
    

2️⃣ Install Dependencies
    npm install
    

3️⃣ Configure Firebase
    Go to Firebase Console
    Create a new project
    Enable Phone Authentication
    Copy your Firebase config and update firebaseConfig.js

    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    export { auth };


🚀 Running the App
    npm start
    App will run at http://localhost:3000/

📜 Usage Guide
1️⃣ Enter your mobile number
2️⃣ Solve reCAPTCHA challenge
3️⃣ Click "Send OTP"
4️⃣ Enter received OTP
5️⃣ Verify & Login! 🎉

💡 Troubleshooting
❌ Error: auth/billing-not-enabled
✅ Fix: Enable billing in Firebase settings. (or you can use custom phone number and otp for development)

❌ Error: auth/invalid-phone-number
✅ Fix: Enter a valid phone number with the country code (+91XXXXXXXXXX).

