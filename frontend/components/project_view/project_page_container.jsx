import { connect } from 'react-redux';
import ProjectViewPage from './project_page';
import { getAProject } from '../../actions/project_actions';
import { getAllRewards } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.currentProject,
  projectId: ownProps.match.params.projectid,
  rewards: Object.values(state.entities.rewards)
});

const mapDispatchToProps = (dispatch) => ({
  getAProject: id => dispatch(getAProject(id)),
  getAllRewards: () => dispatch(getAllRewards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectViewPage);
