// LogoutPage.jsx
import React from 'react';
//import { createContext, useContext, useReducer } from 'react';
const Logout = ({ onLogout }) => {
  return (
    <div>
      <h1>Logout Page</h1>
      {/* Your logout page content goes here */}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Logout;
