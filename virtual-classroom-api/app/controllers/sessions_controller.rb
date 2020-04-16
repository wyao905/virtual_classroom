class SessionsController < ApplicationController
    def create
        if params[:userSelectOption].nil?
            render json: {errors: {user: ["must be student or instructor"]}}
        else
            if params[:userSelectOption] == "student"
                user = Student.find_by(email: params[:email])
                options = {include: [:enrollments, :messages, :subjects]}
                serializer = StudentSerializer.new(user, options)
            else 
                user = Instructor.find_by(email: params[:email])
                options = {include: [:subjects, :messages]}
                serializer = InstructorSerializer.new(user, options)
            end
    
            if user.nil?
                render json: {errors: {user: ["not found"]}}
            else
                if !user.authenticate(params[:password])
                    render json: {errors: {password: ["is incorrect"]}}
                else
                    render json: serializer
                end
            end
        end
    end
end