class SubjectsController < ApplicationController
    def show
        subject = Subject.find_by(id: params[:id])
        options = {include: [:instructor, :lectures, :students]}
        render json: SubjectSerializer.new(subject, options)
    end
end
