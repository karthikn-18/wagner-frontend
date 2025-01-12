import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import '../../Assets/styles/Dashboard.css'

const AdminLayout = () => {
    return (
        <div className="dashboard-main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        {/* Sidebar */}
                        <aside className="w-1/4 bg-gray-100 dashboard-left-contents">
                            <AdminNavigation />
                        </aside>
                    </div>
                    <div className="col-lg-9">
                        {/* Dynamic Content */}
                        <main className="dashboard-right-contents">
                            <Outlet /> {/* This is where the nested routes will render */}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
