class MessagesController < ApplicationController
    def index
        messages = Message.all
        options = {include: [:instructor, :student, :lecture]}
        render json: MessageSerializer.new(messages, options)
    end
end
