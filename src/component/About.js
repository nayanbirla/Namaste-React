import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    console.log("parent class contructor");
  }

  componentDidMount() {
    console.log("parent class component did mount");
  }

  render() {
    console.log("parent class render");
    return (
      <div>
        <div>
          <h1>About Our Food Website</h1>
        </div>
        <main>
          <section class="about-section general-info">
            <h2 class="about-title">General Information</h2>
            <p class="about-text">
              Welcome to our food website, where you can explore a wide range of
              restaurants and foods.
            </p>
          </section>

          <UserClass />
        </main>
      </div>
    );
  }
}
export default About;
