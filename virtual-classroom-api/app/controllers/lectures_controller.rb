class LecturesController < ApplicationController
    def index
        lectures = Lecture.all
        options = {include: [:subject, :message]}
        render json: LectureSerializer.new(lectures, options)
    end
end
