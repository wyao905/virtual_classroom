class InstructorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :subjects
  has_many :messages
end
