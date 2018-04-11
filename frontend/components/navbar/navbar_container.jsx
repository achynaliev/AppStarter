import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import React from 'react';
import NavBar from './navbar';
import { Link } from 'react-router-dom';
import { setSearchUITrue, setSearchUIFalse} from '../../actions/search_ui_actions';
import { clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  searchState: state.ui.searchState,
  searchResults: state.entities.searchResults
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setSearchUITrue: () => dispatch(setSearchUITrue()),
  setSearchUIFalse: () => dispatch(setSearchUIFalse()),
  clearSearchResults: () => dispatch(clearSearchResults()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
