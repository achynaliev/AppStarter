export const fetchSearchResults = query => (
  $.ajax({
    method: 'GET',
    url: '/api/project_searches',
    data: { search : { query }}
  })
)
