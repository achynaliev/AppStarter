import { connect } from 'react-redux';
import ProjectCreationForm from './project_creation';
import { createProject , clearProjectErrors } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.project_errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createProject: project => dispatch(createProject(project)),
  clearProjectErrors: () => dispatch(clearProjectErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCreationForm);
