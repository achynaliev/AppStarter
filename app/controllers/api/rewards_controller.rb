class  Api::RewardsController < ApplicationController

  def index
    @rewards = Reward.all
    render "api/rewards/index"
  end

end
