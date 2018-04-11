import * as searchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});


export const getSearchResult = (query) => dispatch => (
  searchAPIUtil.fetchSearchResults(query).then(searchResults => (
    dispatch(receiveSearchResults(searchResults))
)));
