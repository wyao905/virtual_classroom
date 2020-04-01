class Subject < ApplicationRecord
  belongs_to :instructor
  has_many :enrollments
  has_many :lectures
end
