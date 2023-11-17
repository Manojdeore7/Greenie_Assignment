import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="tabs">
      <Link to="/" className="tablink" id="defaultOpen">
        User Details
      </Link>
      <Link to="/account-creation" className="tablink">
        Account Creation
      </Link>
    </div>
  );
}

export default Header;
