class EnrollmentsController < ApplicationController
    def create
        student = Student.find_by(email: params[:email])
        if !!student
            subject = Subject.find(params[:subjectId])
            if student.subjects.include?(subject)
                render json: {errors: {student: ["already enrolled"]}}
            else
                enrollment = student.enrollments.build(subject_id: params[:subjectId])
                enrollment.save
                options = {include: [:student, :subject]}
                render json: EnrollmentSerializer.new(enrollment, options)
            end
        else
            render json: {errors: {student: ["not found"]}}
        end
    end
end
