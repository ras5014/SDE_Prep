import { useState } from "react";

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive && <p>{children}</p>}
      {!isActive && <button onClick={() => setIsActive(true)}>Show</button>}
    </section>
  );
};

export default Panel;
