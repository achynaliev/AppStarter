import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import React from 'react';
import NavBar from './navbar';
import { Link } from 'react-router-dom';
import { setSearchUITrue, setSearchUIFalse} from '../../actions/search_ui_actions';

const mapStateToProps = (state) => {
  return {
    exploreLink: <Link to="/explore">Explore</Link>,
    startProject: <Link to="/project/new">Start a project</Link>
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setSearchUITrue: () => dispatch(setSearchUITrue()),
  setSearchUIFalse: () => dispatch(setSearchUIFalse())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
