import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// A component for routes that require admin access
const RequiredAdmin: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true"; // Replace with your logic for checking admin status

  useEffect(() => {
    if (!isAdmin) {
      // Redirect to login or handle unauthorized access
      navigate("/unauthorized");
    }
  }, [isAdmin, navigate]);

  return <Outlet />;
};

export default RequiredAdmin;
