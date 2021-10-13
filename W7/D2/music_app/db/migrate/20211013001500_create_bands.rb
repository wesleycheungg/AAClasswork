class CreateBands < ActiveRecord::Migration[5.2]
  def change
    create_table :bands do |t|

      t.timestamps
    end
  end
end
