class SubjectsController < ApplicationController
    def index
        subjects = Subject.all
        options = {include: [:instructor, :enrollment, :lecture]}
        render json: SubjectSerializer.new(subjects, options)
    end
end
