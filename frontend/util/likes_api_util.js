export const createLike = (project_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like : {
      project_id
    } }
  })
};

export const deleteLike = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  })
};
