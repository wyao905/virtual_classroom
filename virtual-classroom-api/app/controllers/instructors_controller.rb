class InstructorsController < ApplicationController
    def index
        instructors = Instructor.all
        options = {include: [:subject, :message]}
        render json: InstructorSerializer.new(instructors, options)
    end
end
