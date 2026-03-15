import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Us page of our application.</p>
      <User name="John Doe" location="New York" company="ABC Corp" />

      <UserClass name="Jane Smith" location="Los Angeles" company="XYZ Inc" />
    </div>
  );
};

export default About;
