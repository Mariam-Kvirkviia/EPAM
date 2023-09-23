import React, { Fragment } from "react";
import "./form.css";
function Box({ array }) {
  return (
    <>
      {array.map((el, i) => {
        if (el[0] !== "sauces")
          return (
            <p key={crypto.randomUUID()} className="box-item">{`"${el[0]}" : ${
              i !== array.length - 1 ? `"${el[1]}",` : `"${el[1]}"`
            }`}</p>
          );
        else {
          return (
            <div className="box-item" key={crypto.randomUUID()}>
              <p> "sauces": &#91;</p>
              {el[1].map((el, i) => (
                <p key={crypto.randomUUID()}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {i !== el[1].length - 1 ? `"${el}"` : `"${el}",`}
                </p>
              ))}
              <p> &#93;</p>
            </div>
          );
        }
      })}
    </>
  );
}

export default Box;
