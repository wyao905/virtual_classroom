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

    def create
        student = Student.new(name: params[:name], password: params[:password], email: params[:email])
        if student.save
            render json: StudentSerializer.new(student)
        else
            render json: {errors: student.errors}
        end
    end
end
