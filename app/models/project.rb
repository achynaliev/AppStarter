class Project < ApplicationRecord

  validates :title, :short_description, :full_description, :funding_goal,
            :funding_end_date, :user_id, presence: true

  belongs_to :user

  has_many :project_categories,
    class_name: :ProjectCategory,
    foreign_key: :user_id

  has_many :categories,
    through: :project_categories,
    source: :category

end
