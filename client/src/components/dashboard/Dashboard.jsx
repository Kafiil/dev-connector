import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends Component {
  componentWillMount = () => {
    this.props.getCurrentProfile();
  };
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

// Dashboard.prototypes = {
//   profile: PropTypes.object.isRequired
// };

// mapStateToProps = state => ({
//   profile: state.profile
// });

export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);
