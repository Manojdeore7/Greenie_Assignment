import Context from "./Context";
import { useEffect, useState } from "react";
function ContextProvider(props) {
  let [UserData, setData] = useState([]);

  let getData = async () => {
    let res = await fetch(
      "https://greenie-assignment-default-rtdb.firebaseio.com/UserData.json"
    );
    let data = await res.json();
    let x = [];
    for (let key in data) {
      x.push({ key, ...data[key] });
    }
    setData(x);
  };
  function refresh() {
    getData();
  }
  useEffect(() => {
    getData();
  }, []);

  let context = {
    Data: UserData,
    refresh: refresh,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}
export default ContextProvider;
