import React, { useState, useEffect } from "react";
import "./UserDetails.css";
function UserDetails() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {});

  return (
    <div>
      <div className="search">
        <input />
        <button>Search</button>
      </div>
      <div>
        <table id="userTable">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>JohnDoe</td>
              <td>john@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserDetails;
