import { connect } from 'react-redux';

import RecommendedProjects from './recommended_projects';
import { getAllProjects, getRecommenedProjects } from '../../../actions/project_actions';

const mapStateToProps = state => ({
  projects: Object.values(state.entities.recommendedProjects)
});

const mapDispatchToProps = dispatch => ({
  getRecommenedProjects: () => dispatch(getRecommenedProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedProjects);
