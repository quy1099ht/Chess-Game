import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// A component for routes that require authentication
const RequiredLogin: React.FC = () => {
  const navigate = useNavigate();
  const hasAccessToken = localStorage.getItem("accessToken"); // Replace with your auth logic

  useEffect(() => {
    if (!hasAccessToken) {
      navigate("/login");
    }
  }, [hasAccessToken, navigate]);

  return <Outlet />;
};

export default RequiredLogin;
