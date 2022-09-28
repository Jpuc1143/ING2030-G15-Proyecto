class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :rut
      t.string :email
      t.string :fname
      t.string :lname
      t.string :dob

      t.timestamps
    end
  end
end
