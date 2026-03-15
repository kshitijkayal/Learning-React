import React, { useEffect } from "react";

const User = (props) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval");
    }, 1000);

    // Clean up function to clear the interval when the component is unmounted
    return () => {
      console.log("Component Unmounted");
      clearInterval(timer);
    };
  });
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
