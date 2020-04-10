class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :sender, :created_at

  belongs_to :subject
  belongs_to :instructor
  belongs_to :student
end
