json.set! @project.id do
  json.extract! @project, :id, :title, :short_description, :full_description, :funding_goal,
                        :funding_end_date, :image_url, :video_url, :user_id
  json.username @project.user.username
  json.backings @backed
  json.total_pledged @total_pledged
  json.num_backers @num_backers
  if @current_user
    json.likeId @project.liked_by_current_user(@current_user.id)
  else
    json.likeId []
  end
end
