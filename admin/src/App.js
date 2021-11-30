import "./App.css";
import Home from "./pages/home/Home";
import {Routes, Route, Navigate} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
    const admin = localStorage.getItem("persist:root")
        ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
              .currentUser.isAdmin
        : "";
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route
                exact
                path="/"
                element={!admin ? <Navigate to="/login" /> : <Home />}
            />
            <Route
                path="/users"
                element={!admin ? <Navigate to="/login" /> : <UserList />}
            />
            <Route
                path="/user/:userId"
                element={!admin ? <Navigate to="/login" /> : <User />}
            />
            <Route
                path="/newUser"
                element={!admin ? <Navigate to="/login" /> : <NewUser />}
            />
            <Route
                path="/products"
                element={!admin ? <Navigate to="/login" /> : <ProductList />}
            />
            <Route
                path="/product/:productId"
                element={!admin ? <Navigate to="/login" /> : <Product />}
            />
            <Route
                path="/newproduct"
                element={!admin ? <Navigate to="/login" /> : <NewProduct />}
            />
        </Routes>
    );
}

export default App;
