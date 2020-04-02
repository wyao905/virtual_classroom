class StudentsController < ApplicationController
    def index
        students = Student.all
        options = {include: [:enrollments, :messages]}
        render json: StudentSerializer.new(students, options)
    end
end
