import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Pages/User/Home";
import UserLayout from "../UserLayout/UserLayout";
import About from '../Pages/User/About';
import Products from '../Pages/User/Products';
import ProductDetails from "../Pages/User/ProductDetails";
import PrivacyPolcy from "../Pages/User/PrivacyPolicyPage";
import Blog from "../Pages/User/Blog";
import BlogOverview from "../Pages/User/BlogOverview";
import Contact from "../Pages/User/Contact";
import Cars from "../Pages/User/Application/Cars";
import Aviation from "../Pages/User/Application/Aviation";
import Boat from "../Pages/User/Application/Boat";
import Classic from "../Pages/User/Application/Classic";
import Motorcycle from "../Pages/User/Application/Motorcycle";
import OffRoad from "../Pages/User/Application/OffRoad";
import Ship from "../Pages/User/Application/Ship";
import Truck from "../Pages/User/Application/Truck";
import Tuning from "../Pages/User/Application/Tuning";
import Agriculture from '../Pages/User/Industries/Agriculture';
import Construction from '../Pages/User/Industries/Construction';
import CombineHeat from '../Pages/User/Industries/CombinedHeat';
import Shipping from '../Pages/User/Industries/Shipping';
import WindTurbines from '../Pages/User/Industries/WindTurbines';
import CableCars from "../Pages/User/Industries/CableCars";
import AdminLayout from '../Pages/Admin/Admin';
import Dashboard from "../Pages/Admin/Dashboard";
import GetBlogs from "../Pages/Admin/Blogs/GetBlogs";
import GetTestimonials from "../Pages/Admin/Testimonials/GetTestimonials";
import GetContact from "../Pages/Admin/Contact/Contact";
import Login from "../Pages/Admin/Login";
import ProtectedRoute from "../ProtectedRoute";
import Industries from "../Pages/Admin/Industries/Industries";
import Category from "../Pages/Admin/Category/Category";
import Application from "../Pages/Admin/Application/Application";
import AddProductForm from "../Pages/Admin/Products/AddProducts";
import AdminProducts from "../Pages/Admin/Products/Products";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/products", element: <Products /> },
        { path: "/product-detail/:id", element: <ProductDetails /> },
        { path: "/privacy-policy", element: <PrivacyPolcy /> },
        { path: "/blog", element: <Blog /> },
        { path: "/blog-overview/:id", element: <BlogOverview /> },
        { path: "/application-cars", element: <Cars /> },
        { path: "/application-aviation", element: <Aviation /> },
        { path: "/application-boat", element: <Boat /> },
        { path: "/application-classic", element: <Classic /> },
        { path: "/application-motorcycle", element: <Motorcycle /> },
        { path: "/application-offroad", element: <OffRoad /> },
        { path: "/application-ship", element: <Ship /> },
        { path: "/application-truck", element: <Truck /> },
        { path: "/application-tuning", element: <Tuning /> },
        { path: "/contact", element: <Contact /> },
        { path: "/industry-agriculture-&-forestry", element: <Agriculture /> },
        { path: "/industry-construction", element: <Construction /> },
        { path: "/industry-wind-turbines", element: <WindTurbines /> },
        { path: "/industry-shipping", element: <Shipping /> },
        { path: "/industry-cable-cars-&-lifts", element: <CableCars /> },
        { path: "/industry-combines-heat-&-power-plants", element: <CombineHeat /> },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/blogs",
          element: (
            <ProtectedRoute>
              <GetBlogs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/testimonials",
          element: (
            <ProtectedRoute>
              <GetTestimonials />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/contact",
          element: (
            <ProtectedRoute>
              <GetContact />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/industries",
          element: (
            <ProtectedRoute>
              <Industries />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/category",
          element: (
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/application",
          element: (
            <ProtectedRoute>
              <Application />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/add-product",
          element: (
            <ProtectedRoute>
              <AddProductForm />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/edit-product/:id",
          element: (
            <ProtectedRoute>
              <AddProductForm />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/products",
          element: (
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/admin-login",
      element: <Login />,
    },
  ]);

  return routes;
};

export default Routes;
