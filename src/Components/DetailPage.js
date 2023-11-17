import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../contexts/Context";
function DetailPage() {
  let { Id } = useParams();
  let context = useContext(Context);
  let data = context.Data;
  let ActualData = data.filter((e, i) => {
    return e.key == Id;
  });
  console.log(Id, data);
  return (
    <>
      <div>
        <h4>{ActualData[0].mail}</h4>
        <h4>{ActualData[0].mobile}</h4>
        <h4>{ActualData[0].username}</h4>
      </div>
    </>
  );
}

export default DetailPage;
