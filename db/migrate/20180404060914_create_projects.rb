class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :short_description, null: false
      t.string :full_description, null: false
      t.integer :funding_goal, null: false
      t.datetime :funding_end_date, null: false
      t.string :image_url
      t.string :video_url
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :projects, :user_id
  end
end
