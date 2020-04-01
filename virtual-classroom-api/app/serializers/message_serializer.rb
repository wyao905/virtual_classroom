class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :date

  belongs_to :instructor
  belongs_to :student
  belongs_to :lecture
end
