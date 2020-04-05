class SessionsController < ApplicationController
    def create
        if params[:userSelectOption] == "student"
            user = Student.find_by(email: params[:email])
            options = {include: [:enrollments, :messages]}
            serializer = StudentSerializer.new(user, options)
        elsif params[:userSelectOption] == "instructor"
            user = Instructor.find_by(email: params[:email])
            options = {include: [:subjects, :messages]}
            serializer = InstructorSerializer.new(user, options)
        else
            user = nil
        end

        if user.nil?
            render json: {error: "Unable to find user"}
        else
            if !user.authenticate(params[:password])
                render json: {error: "Incorrect password"}
            else
                render json: serializer
            end
        end
    end
end