import React from "react";

{
  /* Sequence of execution in class component:

Parent Constructor
Parent Render
John Doe Child Constructor
John Doe Child Render
Jane Smith Child Constructor
Jane Smith Child Render
John Doe Child Component Did Mount Mount
Jane Smith Child Component Did Mount
Parent Component Did Mount

*/
}

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount");
  }
  render() {
    console.log(this.props.name + " Child Render");
    const { count } = this.state;
    const { name, location, company } = this.props;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
        <h2>User Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Company: {company}</h4>
      </div>
    );
  }
}

export default UserClass;
