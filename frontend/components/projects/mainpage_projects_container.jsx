import { connect } from 'react-redux';
import ProjectsMainpageIndex from './mainpage_projects_index';
import { getAllProjects } from '../../actions/project_actions';

const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects)
});

const mapDispatchToProps = dispatch => ({
  getAllProjects: () => dispatch(getAllProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsMainpageIndex);
