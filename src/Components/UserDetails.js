import React, { useState, useEffect, useContext, useRef } from "react";
import "./UserDetails.css";
import Context from "../contexts/Context";
import { Link } from "react-router-dom";
function UserDetails() {
  let context = useContext(Context);
  let [filterdata, setData] = useState([]);
  let data = context.Data;

  let serachR = useRef();

  function search() {
    let data1 = data.filter((e) => {
      return e.mail === serachR.current.value;
    });
    setData(data1);
  }
  return (
    <div>
      <div className="search">
        <input ref={serachR} />
        <button onClick={search}>Search</button>
      </div>
      <div>
        <table id="userTable">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Show Deatails</th>
            </tr>
          </thead>
          <tbody>
            {filterdata.length > 0
              ? filterdata.map((e, i) => {
                  let str = `./${e.key}`;
                  return (
                    <tr>
                      <td>{i}</td>
                      <td>{e.username}</td>
                      <td>{e.mail}</td>
                      <td>
                        <Link to={str}>View</Link>
                      </td>
                    </tr>
                  );
                })
              : data.map((e, i) => {
                  let str = `./${e.key}`;
                  return (
                    <tr>
                      <td>{i}</td>
                      <td>{e.username}</td>
                      <td>{e.mail}</td>
                      <td>
                        <Link to={str}>View</Link>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserDetails;
