class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :project_categories,
    class_name: :ProjectCategory,
    foreign_key: :category_id

end
