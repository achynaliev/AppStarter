class Api::RecommendedController < ApplicationController

  def index
    recommended = Like.all.group(:project_id).count
    proj_ids = recommended.keys
    proj_ids = proj_ids.slice(0, 4)

    # @projects = Project.where("id IN ?", proj_ids)
    @project1 = Project.find(proj_ids[0]);
    @project2 = Project.find(proj_ids[1]);
    @project3 = Project.find(proj_ids[2]);
    @project4 = Project.find(proj_ids[3]);

    render "api/recommended/index"
  end

end
