import React from "react";
class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nayanbirla");
    console.log(data);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}
export default UserClass;
