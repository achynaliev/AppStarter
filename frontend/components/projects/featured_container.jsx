import { connect } from 'react-redux';
import FeaturedProject from './featured_project';
import { getAllProjects, createLikeIndex, deleteLikeIndex } from '../../actions/project_actions';

const mapStateToProps = (state , project) => ({
  currentUser: state.session.currentUser,
  project: project.project,
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
)(FeaturedProject);
