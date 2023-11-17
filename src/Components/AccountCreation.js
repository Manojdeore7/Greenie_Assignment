import React, { useContext, useRef } from "react";
import Context from "../contexts/Context";
import "./AccountCreation.css";
function AccountCreation() {
  let context = useContext(Context);
  let nameR = useRef();
  let mailR = useRef();
  let mobileR = useRef();
  let passwordR = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(
      "https://greenie-assignment-default-rtdb.firebaseio.com/UserData.json",
      {
        method: "POST",
        body: JSON.stringify({
          username: nameR.current.value,
          mail: mailR.current.value,
          mobile: mobileR.current.value,
          password: passwordR.current.value,
        }),
      }
    );
    mailR.current.value = "";
    nameR.current.value = "";
    mobileR.current.value = "";
    passwordR.current.value = "";
    context.refresh();
  };

  return (
    <div id="accountCreation" className="tabcontent">
      <form id="accountForm" onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          ref={nameR}
        />
        <br />
        <label for="mail">MailId:</label>
        <input type="mail" id="mail" placeholder="Enter Maill" ref={mailR} />
        <br />
        <label for="mobile">Mobile No:</label>
        <input
          type="number"
          id="mobile"
          placeholder="Enter Mobile No"
          ref={mobileR}
        />
        <br />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          ref={passwordR}
        />
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default AccountCreation;
