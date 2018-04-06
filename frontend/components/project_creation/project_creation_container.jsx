import { connect } from 'react-redux';
import ProjectCreationForm from './project_creation';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCreationForm);
