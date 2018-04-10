@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :short_description, :image_url
    # json.rewardsId []
    # json.categories project.categories.pluck(:name)
  end
end
