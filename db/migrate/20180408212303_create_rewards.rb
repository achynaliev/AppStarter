class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.integer :pledge_amount, null: false
      t.string :description, null: false
      t.string :title, null: false

      t.timestamps
    end
    
  end
end
