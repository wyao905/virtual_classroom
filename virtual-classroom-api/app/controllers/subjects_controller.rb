class SubjectsController < ApplicationController
    def index
        subjects = Subject.all
        options = {include: [:instructor, :enrollments, :lectures]}
        render json: SubjectSerializer.new(subjects, options)
    end
end
