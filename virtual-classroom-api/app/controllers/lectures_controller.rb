class LecturesController < ApplicationController
    def index
        lectures = Lecture.all
        options = {include: [:subject, :messages]}
        render json: LectureSerializer.new(lectures, options)
    end

    def create
        subject = Subject.find(params[:subject_id])
        lecture = subject.lectures.build(title: params[:title], content: params[:content])
        lecture.save
        options = {include: [:subject]}
        render json: LectureSerializer.new(lecture, options)
    end
end
