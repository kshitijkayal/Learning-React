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
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        company: "Dummy Company",
      },
    };

    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    //called after the first render only (initial loading of the component) and not called for subsequent re-renders
    // console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/kshitijkayal");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });

    //Clear the interval when the component is unmounted
    this.timer = setInterval(() => {
      console.log("Interval");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // called everrytime whenever the component is updated (state or props)
    // or depends on the condition we can decide whether to do something or not
    console.log(this.props.name + " Child Component Did Update");
    if (this.state.count !== prevState.count) {
      console.log("Count Updated");
    }
  }

  componentWillUnmount() {
    //called when the component is removed from the DOM
    // or when we navigate to some other page and the component is not required to be shown
    console.log(this.props.name + " Child Component Will Unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + " Child Render");
    const { count } = this.state;
    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
        <img className="user_img" src={avatar_url} alt="User Avatar" />
        <h2>User Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Company: {company}</h4>
      </div>
    );
  }
}

export default UserClass;
