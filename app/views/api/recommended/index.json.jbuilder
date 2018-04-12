
json.set! @project1.id do
  json.extract! @project1, :id, :title, :short_description, :image_url
end
json.set! @project2.id do
  json.extract! @project2, :id, :title, :short_description, :image_url
end
json.set! @project3.id do
  json.extract! @project3, :id, :title, :short_description, :image_url
end
json.set! @project4.id do
  json.extract! @project4, :id, :title, :short_description, :image_url
end
