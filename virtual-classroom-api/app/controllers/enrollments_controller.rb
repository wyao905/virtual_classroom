class EnrollmentsController < ApplicationController
    def index
        enrollments = Enrollment.all
        options = {include: [:student, :subject]}
        render json: EnrollmentSerializer.new(enrollments, options)
    end
end
