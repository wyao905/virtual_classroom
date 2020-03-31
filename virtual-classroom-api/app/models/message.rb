class Message < ApplicationRecord
  belongs_to :instructor
  belongs_to :student
  belongs_to :lecture
end
