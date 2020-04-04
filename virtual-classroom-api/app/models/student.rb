class Student < ApplicationRecord
    has_secure_password
    
    has_many :enrollments
    has_many :messages
end
