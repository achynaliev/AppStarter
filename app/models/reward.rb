class Reward < ApplicationRecord
  validates :pledge_amount, :description, :title, presence: true

  has_many :backings,
    foreign_key: :reward_id,
    class_name: :Backing

end
