class StudentsController < ApplicationController
    def index
        students = Student.all
        options = {include: [:enrollment, :message]}
        render json: StudentSerializer.new(students, options)
    end
end
