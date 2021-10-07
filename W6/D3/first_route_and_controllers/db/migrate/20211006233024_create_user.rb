class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email, null: false
    end
    
    add_index :users, :name
    add_index :users, :email
  end
end
