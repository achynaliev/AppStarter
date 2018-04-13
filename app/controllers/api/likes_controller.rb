class Api::LikesController < ApplicationController

  def create
    @like = Like.new(likes_params)
    if current_user
      @like.user_id = current_user.id
      if @like.save
        @project = Project.includes(:user).find(@like.project_id)
        @liked = [@like.id]
        backings = @project.backings
        if backings.length === 0
          @backed = []
        else
          backings_id = backings.first.id
          reward = Reward.find(backings.first.reward_id)
          @backed =[backings_id, reward.title, reward.description]
        end
        @num_backers = @project.backings.count + 23
        @total_pledged = @project.total_pledged
        render "api/likes/show"
      end
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @project = Project.includes(:user).find(@like.project_id)
    if @like.destroy
      @liked = []
    else
      @liked = [@like.id]
    end
    backings = @project.backings
    if backings.length === 0
      @backed = []
    else
      backings_id = backings.first.id
      reward = Reward.find(backings.first.reward_id)
      @backed =[backings_id, reward.title, reward.description]
    end
    @total_pledged = @project.total_pledged
    @current_user = current_user
    @num_backers = @project.backings.count + 23
    render "api/likes/show"
  end

  private

  def likes_params
    params.require(:like).permit(:project_id)
  end

end
