import React from "react";
import { useAuth } from "./admin_auth";
import { Navigate } from "react-router-dom";

const AdminReq = (props) => {
    const auth = useAuth();
    if (!auth.user) {
        return <Navigate to="/admin/login" />;
    }
    return props.children;
};

export default AdminReq;