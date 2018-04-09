class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :project_categories,
    foreign_key: :category_id,
    class_name: :ProjectCategory

  # belongs_to :projects

end
