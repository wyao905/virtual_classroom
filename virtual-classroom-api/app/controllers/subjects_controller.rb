class SubjectsController < ApplicationController
    def show
        subject = Subject.find_by(id: params[:id])
        options = {include: [:messages, :instructor, :lectures, :students]}
        render json: SubjectSerializer.new(subject, options)
    end

    def create
        instructor = Instructor.find(params[:instructor_id])
        subject = instructor.subjects.build(name: params[:name])
        if subject.save
            options = {include: [:instructor]}
            render json: SubjectSerializer.new(subject, options)
        else
            render json: {errors: subject.errors}
        end
    end
end
