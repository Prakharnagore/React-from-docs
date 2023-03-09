import React from "react";

function Child({handleClick}) {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal" onClick={handleClick}>
      <button>Click</button>
    </div>
  );
}

export default Child;
