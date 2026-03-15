import React from "react";

const User = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h2>User Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Company: {props.company}</h4>
    </div>
  );
};

export default User;
