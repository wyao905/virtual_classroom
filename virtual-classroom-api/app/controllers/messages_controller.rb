class MessagesController < ApplicationController
    def index
        messages = Message.all
        options = {include: [:instructor, :student, :subject]}
        render json: MessageSerializer.new(messages, options)
    end

    def create
        subject = Subject.find(params[:subject])
        message = subject.messages.build(content: params[:content],
                                         sender: params[:sender],
                                         student_id: params[:student],
                                         instructor_id: params[:instructor])
        message.save
        options = {include: [:instructor, :student, :subject]}
        render json: MessageSerializer.new(message, options)
    end
end
