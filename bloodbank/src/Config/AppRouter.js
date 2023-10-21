import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "../Authentication/SignupPage";
import LoginPage from "../Authentication/LoginPage";
import Protected from "../Authentication/Protected";
import Home from "../Screens/Home";
import AppDrawer from "../Components/AppDrawer";
import DonorForm from "../Screens/Donor Screen/DonorForm";
import DonorList from "../Screens/Donor Screen/DonorList";
import Acceptor from "../Screens/Acceptor Screen/Acceptor";


export default function AppRouter() {
  return (
    <div>
      <Router>
      
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <>
                <Protected Screen={AppDrawer} />
                <Routes>
                  <Route path="/" element={<Protected Screen={Home} />} />
                  <Route path="/donor-form" element={<Protected Screen={DonorForm} />} />
                  <Route path="/donor-list" element={<Protected Screen={DonorList} />} />
                  <Route path="/acceptor" element={<Protected Screen={Acceptor} />} />
                
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
