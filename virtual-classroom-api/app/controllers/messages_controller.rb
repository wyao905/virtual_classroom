class MessagesController < ApplicationController
    def index
        messages = Message.all
        options = {include: [:instructor, :student]}
        render json: MessageSerializer.new(messages, options)
    end
end
