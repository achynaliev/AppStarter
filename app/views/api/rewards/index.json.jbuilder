@rewards.each do |reward|
  json.set! reward.id do
    json.extract! reward, :id, :pledge_amount, :description, :title
  end
end
