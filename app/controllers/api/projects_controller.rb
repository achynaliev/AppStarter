class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.includes(:user).includes(:categories).all.limit(27)
    # @category = @projects.categories.pluck(:id)
    @current_user = current_user
    render "api/projects/index"
  end

  def show
    @project = Project.includes(:user).find(params[:id])
    @backed = [];
    if current_user
      @backed = Backing.find_by(project_id: @project.id, user_id: current_user.id)
      if @backed == nil
        @backed = []
      else
        @backed = [@backed.id, Reward.find_by(id: @backed.rewards).title, Reward.find_by(id: @backed.rewards).description]
      end
    end
    @current_user = current_user
    @total_pledged = Project.total_pledged(@project.id)
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
