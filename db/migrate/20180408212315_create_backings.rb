class CreateBackings < ActiveRecord::Migration[5.1]
  def change
    create_table :backings do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end

    add_index :backings, :user_id
    add_index :backings, :reward_id
    add_index :backings, :project_id
  end
end
