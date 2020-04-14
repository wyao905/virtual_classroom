class MessagesController < ApplicationController
    def index
        messages = Message.all
        options = {include: [:instructor, :student, :subject]}
        render json: MessageSerializer.new(messages, options)
    end

    def create
        binding.pry
        subject = Subject.find(params[:subject_id])
        lecture = subject.lectures.build(title: params[:title], content: params[:content])
        lecture.save
        options = {include: [:subject]}
        render json: LectureSerializer.new(lecture, options)
    end
end
