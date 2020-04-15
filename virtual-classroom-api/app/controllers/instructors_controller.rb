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
        existing_instructor = Instructor.find_by(email: params[:email])
        if !!existing_instructor
            render json: {error: "Email already in use"}
        else
            instructor = Instructor.create(name: params[:name], password: params[:password], email: params[:email])
            render json: InstructorSerializer.new(instructor)
        end
    end
end