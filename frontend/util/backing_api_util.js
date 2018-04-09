export const createBacking = (backing) => {
  return $.ajax({
    method: 'POST',
    url: '/api/backing',
    data: { backing }
  })
};

export const deleteBacking = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/backing/${id}`
  })
};
