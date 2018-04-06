class ProjectCategory < ApplicationRecord
  validates :project_id, :category_id, presence: true

  belongs_to :project

  belongs_to :category
end
