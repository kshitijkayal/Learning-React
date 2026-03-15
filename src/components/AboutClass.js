import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the About Us page of our application.</p>
        <UserClass name="John Doe" location="New York" company="ABC Corp" />
        <UserClass name="Jane Smith" location="Los Angeles" company="XYZ Inc" />
      </div>
    );
  }
}

export default AboutClass;
