import { connect } from 'react-redux';
import SearchComponent from './search_index';
import { getSearchResult } from '../../actions/search_actions';
import { getAllRewards } from '../../actions/reward_actions';

const mapStateToProps = (state) => ({
  project: state.entities.searchResults,
});

const mapDispatchToProps = dispatch => ({
  getSearchResult: (searchResults) => dispatch(getSearchResult(searchResults)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
