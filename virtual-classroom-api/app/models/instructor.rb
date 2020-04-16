class Instructor < ApplicationRecord
    has_secure_password
    
    has_many :subjects
    has_many :messages

    validates :name, :email, :password, presence: true
    validates :email, uniqueness: true
end
