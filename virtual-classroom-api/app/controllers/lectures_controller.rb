class LecturesController < ApplicationController
    def index
        lectures = Lecture.all
        options = {include: [:subject, :messages]}
        render json: LectureSerializer.new(lectures, options)
    end
end
