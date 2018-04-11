import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { setLoginUrl } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setLoginUrl: (url) => dispatch(setLoginUrl(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
