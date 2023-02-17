import "./App.css";
import Login from "./components/account/Login";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "./components/nav/Nav";
import { useState } from "react";
import Create from "./components/create/Create";
import DetailedView from "./components/details/DetailedView";
import Update from "./components/create/Update";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Nav isAuthenticated={isAuthenticated}/>
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login isUserAuthenticated={isUserAuthenticated} />}
          />
          {/* <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          > */}
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} isUserAuthenticated ={isUserAuthenticated}/>} />
          {/* </Route> */}
          {/* <Route
            path="/about"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          > */}
            <Route path="/about" element={<About />} />
          {/* </Route> */}
          <Route
            path="/contact"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/contact" element={<Contact/>} />
          </Route>
          <Route
            path="/create"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/create" element={<Create/>} />
          </Route>
          {/* <Route
            path="/details/:id"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          > */}
            <Route path="/details/:id" element={<DetailedView isAuthenticated={isAuthenticated}/>} />
          {/* </Route> */}
          <Route
            path="/update/:id"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/update/:id" element={<Update/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
