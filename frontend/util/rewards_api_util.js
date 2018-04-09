export const requestRewards = () => (
  $.ajax({
    method: 'GET',
    url: '/api/reward'
  })
);
