import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends Component {
  componentWillMount = () => {
    this.props.getCurrentProfile();
  };
  render() {
    return (
      <div>
        {this.props.profile.loading && (
          <i className="fas fa-4x fa-spinner fa-spin" />
        )}
        <h1>Dashboard</h1>
      </div>
    );
  }
}

Dashboard.prototypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
