import { connect } from 'react-redux';
import ProjectViewPage from './project_page';
import { getAProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.currentProject,
  projectId: ownProps.match.params.projectid
});

const mapDispatchToProps = (dispatch) => ({
  getAProject: id => dispatch(getAProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectViewPage);
