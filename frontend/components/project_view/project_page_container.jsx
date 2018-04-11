import { connect } from 'react-redux';
import ProjectViewPage from './project_page';
import { getAProject, createBacking, deleteBacking} from '../../actions/project_actions';
import { getAllRewards } from '../../actions/reward_actions';
import { setSearchUITrue, setSearchUIFalse} from '../../actions/search_ui_actions';
import { clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.currentProject,
  projectId: ownProps.match.params.projectid,
  rewards: Object.values(state.entities.rewards),
  currentUser: state.session.currentUser,
  searchState: state.ui.searchState,
  searchResults: state.entities.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  getAProject: id => dispatch(getAProject(id)),
  getAllRewards: () => dispatch(getAllRewards()),
  createBacking: project => dispatch(createBacking(project)),
  deleteBacking: project => dispatch(deleteBacking(project)),
  setSearchUITrue: () => dispatch(setSearchUITrue()),
  clearSearchResults: () => dispatch(clearSearchResults()),
  setSearchUIFalse: () => dispatch(setSearchUIFalse())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectViewPage);
