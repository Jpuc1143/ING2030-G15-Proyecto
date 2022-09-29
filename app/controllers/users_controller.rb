class UsersController < ApplicationController
  def index
  end

  def show
    puts params
    @user = User.find(params[:id])
    @exams = @user.exams
  end
end
