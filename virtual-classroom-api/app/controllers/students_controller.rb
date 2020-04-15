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
        # if params[:email] == "" || params[:name] == "" || params[:password] == ""
            render json: "Must fill in all inputs"
        # else
            existing_student = Student.find_by(email: params[:email])
            if !!existing_student
                render json: {error: "Email already in use"}
            else
                student = Student.create(name: params[:name], password: params[:password], email: params[:email])
                render json: StudentSerializer.new(student)
            end
        # end
    end
end
