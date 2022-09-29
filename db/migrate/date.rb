class UserDateToDateTime < ActiveRecord::Migration[6.1]
  def change
    change_column(:users, :dob, :date)
  end
end
