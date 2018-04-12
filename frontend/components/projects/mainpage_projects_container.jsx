import { connect } from 'react-redux';
import ProjectsMainpageIndex from './mainpage_projects_index';
import { getAllProjects, createLikeIndex, deleteLikeIndex } from '../../actions/project_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  projects: Object.values(state.entities.projects)
});

const mapDispatchToProps = dispatch => ({
  getAllProjects: () => dispatch(getAllProjects()),
  createLikeIndex: (project_id) => dispatch(createLikeIndex(project_id)),
  deleteLikeIndex: (id) => dispatch(deleteLikeIndex(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsMainpageIndex);
