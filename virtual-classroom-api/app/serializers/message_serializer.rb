class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :sender, :created_at

  belongs_to :instructor
  belongs_to :student
  belongs_to :lecture
end
