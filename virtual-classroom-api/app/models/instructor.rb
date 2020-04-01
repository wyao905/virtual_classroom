class Instructor < ApplicationRecord
    has_many :subjects
    has_many :messages
end
