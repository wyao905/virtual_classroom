class InstructorsController < ApplicationController
    def index
        instructors = Instructor.all
        options = {include: [:subjects, :messages]}
        render json: InstructorSerializer.new(instructors, options)
    end

    def show
        instructor = Instructor.find(params[:id])
        options = {include: [:messages]}
        render json: InstructorSerializer.new(instructor, options)
    end
end
