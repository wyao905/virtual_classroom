class Message < ApplicationRecord
  belongs_to :subject
  belongs_to :instructor
  belongs_to :student

  validates :content, presence: true
end
