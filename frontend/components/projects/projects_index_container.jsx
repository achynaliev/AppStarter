import { connect } from 'react-redux';

import ProjectsIndex from './projects_index';
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
)(ProjectsIndex);
