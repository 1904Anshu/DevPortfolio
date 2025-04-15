import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Your custom styles
import App from "./App";
import { ToastContainer } from "react-toastify"; // Importing ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the default Toastify styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* Add ToastContainer here to enable toasts globally */}
    <ToastContainer
      position="top-right" // Toast position on the screen
      autoClose={5000} // Toast will auto-close after 5 seconds
      hideProgressBar={false} // Show progress bar
      newestOnTop={true} // New toasts will appear on top
      closeOnClick // Allow closing the toast by clicking on it
      rtl={false} // Set to true for right-to-left languages
      pauseOnFocusLoss // Pause toast on window/tab focus loss
      draggable // Allow dragging the toast
      pauseOnHover // Pause the toast on hover
    />
  </React.StrictMode>
);
