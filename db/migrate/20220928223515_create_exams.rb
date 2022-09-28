class CreateExams < ActiveRecord::Migration[6.1]
  def change
    create_table :exams do |t|
      t.string :name
      t.string :author
      t.string :location
      t.text :analysis
      t.datetime :date


      t.timestamps
    end
  end
end
