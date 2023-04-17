import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl" to ='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to = '/orders'>Orders</Link>
        <Link className="btn btn-ghost normal-case text-xl" to = '/profile'>Profile</Link>
        <Link className="btn btn-ghost normal-case text-xl" to ='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to = "/register">Register</Link>
      </div>
    </>
  );
};

export default Header;
