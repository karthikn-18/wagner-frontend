import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/Resources/footer_prophecy-new.svg';
import { useLogoutUserMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { useNavigate, useLocation } from "react-router-dom";

const AdminNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            // Assuming logoutUser() is an async API call to log out the user
            await logoutUser().unwrap();

            // Clear any authentication state (e.g., Redux store)
            dispatch(logout());

            // Show the logout success alert
            alert("Logged out successfully!");

            // Navigate to the home page ("/")
            console.log("Redirecting to home page...");
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Logout failed", error);
        }
    };



    useEffect(() => {
        // Set active tab logic here if needed for initial load
    }, [location.pathname]);

    const { pathname } = useLocation();
    const isBlogPageActive = pathname === '/dashboard' || pathname === '/dashboard/manage-post' || pathname === '/dashboard/add-post' || pathname.startsWith('/dashboard/update-items');
    const isCareerPageActive = pathname === '/dashboard/career-manage' || pathname === '/dashboard/career-add' || pathname === '/dashboard/career-query';

    return (
        <div className="dashboard-sidebar">
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="bottom-btn">
                <div className="menus">
                    <nav>
                        <ul>
                            <li>
                                <button
                                    className={isBlogPageActive ? 'activeTab' : ''}
                                    onClick={() => navigate("/dashboard/manage-post")}
                                >
                                    <span>Blogs & Insights</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    className={isCareerPageActive ? 'activeTab' : ''}
                                    onClick={() => navigate("/dashboard/career-manage")}
                                >
                                    <span>Career</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    className={location.pathname.includes("/dashboard/enquiry-form") ? "activeTab" : ""}
                                    onClick={() => navigate("/dashboard/enquiry-form")}
                                >
                                    <span>Contact Enquiry</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default AdminNavigation;
