class Lecture < ApplicationRecord
  belongs_to :subject
  has_many :messages
end
