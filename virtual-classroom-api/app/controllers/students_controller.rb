class StudentsController < ApplicationController
    def index
        students = Student.all
        options = {include: [:enrollments, :messages]}
        render json: StudentSerializer.new(students, options)
    end

    def show
        student = Student.find(params[:id])
        options = {include: [:messages]}
        render json: StudentSerializer.new(student, options)
    end
end
