class ExamsController < ApplicationController
  def show
    @exam = Exam.find(params[:user_id])
  end
end
