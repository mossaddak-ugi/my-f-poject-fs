import React from "react";

function Buton({ title, disabled }) {
  return (
    <>
      <button className="btn btn-success btn-lg px-5" disabled={disabled}>
        {title}
      </button>
    </>
  );
}
export default Buton;
