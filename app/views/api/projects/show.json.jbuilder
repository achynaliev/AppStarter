json.project do
  json.extract! @project, :id, :title, :short_description, :full_description, :funding_goal,
                      :funding_end_date, :image_url, :video_url, :user_id
end
