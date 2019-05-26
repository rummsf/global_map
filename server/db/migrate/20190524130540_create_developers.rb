class CreateDevelopers < ActiveRecord::Migration[5.2]
  def change
    create_table :developers do |t|
      t.string :country
      t.string :start
      t.string :end

      t.timestamps
    end
  end
end
