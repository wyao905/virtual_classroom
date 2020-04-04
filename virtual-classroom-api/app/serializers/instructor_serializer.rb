class InstructorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email

  has_many :subjects
  has_many :messages
end
