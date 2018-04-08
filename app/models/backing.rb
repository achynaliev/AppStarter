class Backing < ApplicationRecord
  validates :user_id, :reward_id, :project_id, presence: true

  belongs_to :users,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :rewards,
    foreign_key: :reward_id,
    class_name: :Reward

  belongs_to :projects,
    foreign_key: :Project,
    class_name: :Project

end
