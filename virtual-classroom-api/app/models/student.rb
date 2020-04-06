class Student < ApplicationRecord
    has_secure_password

    has_many :enrollments
    has_many :messages
    has_many :subjects, through: :enrollments
end
