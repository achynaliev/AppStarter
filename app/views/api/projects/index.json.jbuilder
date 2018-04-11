@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :short_description, :image_url
    json.username project.user.username
    json.userId project.user.id
    # json.rewardsId []
    json.categories project.categories.pluck(:name)
    if @current_user
      json.likeId project.liked_by_current_user(@current_user.id)
    else
      json.likeId []
    end
  end
end
