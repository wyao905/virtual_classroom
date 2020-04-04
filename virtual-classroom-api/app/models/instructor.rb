class Instructor < ApplicationRecord
    has_secure_password
    
    has_many :subjects
    has_many :messages
end
