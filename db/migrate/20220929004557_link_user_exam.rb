class LinkUserExam < ActiveRecord::Migration[6.1]
  def change
    add_reference :exams, :user, index: true
  end
end
