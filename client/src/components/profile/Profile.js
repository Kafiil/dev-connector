import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <p>{this.props.profile.text}</p>
      </div>
    );
  }
}

export default Profile;
