import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../asserts/logo.png";
// import logo from '../../asserts/study.png'
import search from "../../asserts/search-solid.svg";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/CurrentUser";
import decode from "jwt-decode";
import bars from "../../asserts/bars-solid.svg";
const Navbar = ({ handleSlideIn  }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isStartRoute = location.pathname === '/';

  const user = useSelector((state) => state.currentUserReducer);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [user?.token, dispatch]);
  
  return (
    <nav  className = {!isStartRoute ? `main-nav` :`hide-nav`}>
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" style={{color:"white"}} />
        </button>
        <div className="navbar-1">
          <Link to="/home" className=" nav-logo">
            <h2>Studdy Buddy</h2>
            {/* <img src={logo} alt="logo" height="30px" style={{minWidth:"200px", borderRadius:"20px"}}/> */}
          </Link>
          <Link to="/Subscription" className="nav-item nav-btn res-nav">
            Subscription
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav ">
            Home  
          </Link>
          {/* <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link> */}
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" className="search-icon" width="18" />
          </form>
        </div>
        <div className="navbar-2">
          {user === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log In
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="12px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/Users/${user.result?._id}`}
                >
                  {user?.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
