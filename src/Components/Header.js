import React from "react";
import "./Header.css";
function Header() {
  return (
    <div class="tabs">
      <button
        class="tablink"
        onclick="openTab(event, 'userDetails')"
        id="defaultOpen"
      >
        User Details
      </button>
      <button class="tablink" onclick="openTab(event, 'accountCreation')">
        Account Creation
      </button>
    </div>
  );
}

export default Header;
