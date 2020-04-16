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

    def create
        instructor = Instructor.new(name: params[:name], password: params[:password], email: params[:email])
        if instructor.save
            render json: InstructorSerializer.new(instructor)
        else
            render json: {errors: instructor.errors}
        end
    end
end