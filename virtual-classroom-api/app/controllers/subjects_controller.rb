class SubjectsController < ApplicationController
    def show
        subject = Subject.find_by(id: params[:id])
        options = {include: []}
    end
end
