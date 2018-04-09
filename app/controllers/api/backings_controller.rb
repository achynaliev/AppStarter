class Api::BackingsController < ApplicationController
  def create
    @backing = Backing.new(backings_params)
    @backing.user_id = current_user.id

    if @backing.save
      render "api/backing/show"
    else
      render json: @backing.errors.full_messages, status: 422
    end
  end

  def destroy
    @backing = Backing.find_by(
      project_id: params[:project_id],
      user_id: current_user.id
    )

    @backing.destroy
  end

  def backings_params
    params.require(:backings).permit(:reward_id, :project_id)
  end
end
