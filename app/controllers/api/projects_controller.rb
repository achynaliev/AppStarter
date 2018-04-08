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
    @project = Project.new(project_creation)
    @project.user_id = current_user.id
    if @project.save
      category = Category.find_by(name: project_params['category'])
      pr_cat = ProjectCategory.new(project_id: @project.id, category_id: category.id)
      pr_cat.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def project_params
    params.require(:project).permit(:title, :short_description, :full_description,
                                    :funding_goal, :funding_end_date, :image_url,
                                    :video_url, :category)
  end


  def project_creation
    params = project_params
    result = {}
    result['title'] = params['title']
    result['short_description'] = params['short_description']
    result['full_description'] = params['full_description']
    result['funding_goal'] = params['funding_goal']
    result['funding_end_date'] = params['funding_end_date']
    result['image_url'] = params['image_url']
    result['video_url'] = params['video_url']
    return result
  end
end
