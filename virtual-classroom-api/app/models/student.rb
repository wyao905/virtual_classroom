class Student < ApplicationRecord
    has_many :enrollments
    has_many :messages
end
