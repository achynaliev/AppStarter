class Api::LikesController < ApplicationController

  def create
    @like = Like.new(likes_params)
    if current_user
      @like.user_id = current_user.id
      if @like.save
        @project = Project.includes(:user).find(@like.project_id)
        @liked = [@like.id]
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
    render "api/likes/show"
  end

  private

  def likes_params
    params.require(:like).permit(:project_id)
  end

end
