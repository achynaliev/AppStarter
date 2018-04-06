class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.includes(:user).all.limit(10)
    render "api/projects/index"
  end

  def show
    @project = Project.includes(:user).find(params[:id])
    render "api/projects/show"
  end

  def update

  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id

    if @project.save!
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def project_params
    params.require(:project).permit(:title, :short_description, :full_description,
                                    :funding_goal, :funding_end_date, :image_url,
                                    :video_url)
  end
end
