import React, { useState, useContext } from "react";
import { API } from "../../service/api";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

export default function Login({isUserAuthenticated}) {
  const signupinitialValues = {
    name: "",
    username: "",
    password: "",
  };
  const logininitialValues = {
    username: "",
    password: "",
  };

  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupinitialValues);
  const [login, setLogin] = useState( logininitialValues);
  const {setAccount} = useContext(DataContext);

  const navigate = useNavigate();

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };



  const signupUser = async (e) => {
    e.preventDefault();
    const response = await API.userSignup(signup);
    if (response.isSuccess) {
      setSignup(signupinitialValues);
      toggleAccount("login");
      toast(response.data.msg);
    } else {
      toast("Something went wrong! Please try again later");
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    let response = await API.userLogin(login)
    if(response.isSuccess){
      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`)
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`)
      setAccount({username: response.data.username, name: response.data.name})
      setLogin(logininitialValues)
      navigate("/")
      toast("Login Successfull🥹")
      isUserAuthenticated(true)
    }
    else{
      toast("Something went wrong! Please try again later");
    }
  }

  return (
    <>
      <div className="login_container center">
        {account === "login" ? (
          <>
            <h2>Login</h2>
            <form>
              <input
                type="text"
                name="username"
                required
                placeholder="Enter Username"
                onChange={(e) => onValueChange(e)}
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Enter Password"
                onChange={(e) => onValueChange(e)}
              />

              <button id="login" onClick={(e) => loginUser(e)}>Login</button>
              <h3>or</h3>
              <button id="register" onClick={() => toggleAccount("signup")}>
                Create an account
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>SignUp</h2>
            <form>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Name"
                onChange={(e) => onInputChange(e)}
              />
              <input
                type="text"
                name="username"
                required
                placeholder="Enter Username"
                onChange={(e) => onInputChange(e)}
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Enter Password"
                onChange={(e) => onInputChange(e)}
              />
              <button id="register" onClick={(e) => signupUser(e)}>
                Signup
              </button>
              <h3>or</h3>
              <button id="login" onClick={() => toggleAccount("login")}>
                Already have an account
              </button>
            </form>
          </>
        )}
      </div>
      {/* <button onClick={() => }>Notify!</button> */}
      <ToastContainer />
    </>
  );
}
