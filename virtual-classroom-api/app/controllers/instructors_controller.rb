class InstructorsController < ApplicationController
    def index
        instructors = Instructor.all
        options = {include: [:subjects, :messages]}
        render json: InstructorSerializer.new(instructors, options)
    end
end
