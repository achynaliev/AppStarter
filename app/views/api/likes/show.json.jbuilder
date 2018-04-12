json.set! @project.id do
  json.extract! @project, :id, :title, :short_description, :full_description, :funding_goal,
                        :funding_end_date, :image_url, :video_url, :user_id
  json.username @project.user.username
  json.backings @backed
  if @current_user
    json.likeId @project.liked_by_current_user(@current_user.id)
  else
    json.likeId []
  end
end
