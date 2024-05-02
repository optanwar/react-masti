import React from "react";

const Events = (props) => {
  const handleAlert = () => {
    alert("React Events");
  };
  return (
    <div>
      <button onClick={handleAlert}>{props.children}</button>
    </div>
  );
};

export default Events;
