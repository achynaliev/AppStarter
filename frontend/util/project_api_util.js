export const requestProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);

export const requestProject = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  })
);

export const createProject = (project) => {
    return $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: { project }
  })
};
